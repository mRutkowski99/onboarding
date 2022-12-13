import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  vm$ = this.store.vm$;

  ngOnInit(): void {
    this.store.loadRecipeDetails();

    this.recipeDeletedEventSubscription = this.eventBus.on(
      EventNameEnum.RecipeDeleted,
      (id) => {
        if (id === this.getIdFromSnapshot()) this.router.navigate(['']);
      }
    );
  }

  onReload() {
    this.store.loadRecipeDetails();
  }

  onEdit() {
    this.router.navigate(['edit', this.getIdFromSnapshot()]);
  }

  onDelete() {
    const id = this.getIdFromSnapshot();

    this.dialogService
      .openGenericDialog('Are you sure you want to delete this recipe?', false)
      .subscribe((response) => {
        if (response && id) this.store.deteleRecipe(id);
      });
  }

  ngOnDestroy(): void {
    this.idSubscription?.unsubscribe();
    this.recipeDeletedEventSubscription?.unsubscribe();
  }

  private getIdFromSnapshot(): string | null {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }
}
