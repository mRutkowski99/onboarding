import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';
import { SharedUiRecipeDetailsComponent } from '@onboarding/shared/ui-recipe-details';
import {
  RecipeDetailsStoreFacade,
  WebRecipesRecipeDetailsDataAccessModule,
} from '@onboarding/web/recipes/recipe-details/data-access';
import { SharedUiLoadingComponent } from '@onboarding/shared/ui-loading';
import { SharedUiErrorComponent } from '@onboarding/shared/ui-error';
import { MatButtonModule } from '@angular/material/button';
import {
  DialogService,
  UtilDialogServiceModule,
} from '@onboarding/web/shared/util-dialog-service';
import {
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';

@Component({
  selector: 'onboarding-web-recipes-recipe-details-feature',
  standalone: true,
  imports: [
    CommonModule,
    WebRecipesRecipeDetailsDataAccessModule,
    UtilDialogServiceModule,
    MatButtonModule,
    SharedUiRecipeDetailsComponent,
    SharedUiLoadingComponent,
    SharedUiErrorComponent,
  ],
  templateUrl: './web-recipes-recipe-details-feature.component.html',
  styleUrls: ['./web-recipes-recipe-details-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesRecipeDetailsFeatureComponent
  implements OnInit, OnDestroy
{
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: RecipeDetailsStoreFacade,
    private dialogService: DialogService,
    private eventBus: EventBusService
  ) {}

  private recipeDeletedEventSubscription: Subscription | undefined;
  private idSubscription: Subscription | undefined;
  private recipeId: string | undefined;

  vm$ = this.store.vm$;

  ngOnInit(): void {
    this.initRecipeDetails();

    this.recipeDeletedEventSubscription = this.eventBus.on(
      EventNameEnum.RecipeDeleted,
      (id) => {
        if (id === this.recipeId) this.router.navigate(['']);
      }
    );
  }

  onReload() {
    this.recipeId
      ? this.store.loadRecipeDetails(this.recipeId)
      : this.initRecipeDetails();
  }

  onEdit() {
    this.router.navigate(['edit', this.recipeId]);
  }

  onDelete() {
    this.dialogService
      .openGenericDialog('Are you sure you want to delete this recipe?', false)
      .subscribe((response) => {
        if (response && this.recipeId) this.store.deteleRecipe(this.recipeId);
      });
  }

  ngOnDestroy(): void {
    this.idSubscription?.unsubscribe();
    this.recipeDeletedEventSubscription?.unsubscribe();
  }

  private initRecipeDetails() {
    this.idSubscription = this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        filter((id) => !!id)
      )
      .subscribe((id) => {
        this.recipeId = <string>id;
        this.store.loadRecipeDetails(this.recipeId);
      });
  }
}
