import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiIngredientChipComponent } from '@onboarding/shared/ui-ingredient-chip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  CreateUpdateRecipePayload,
  Ingredient,
  Recipe,
} from '@onboarding/shared/domain';
import {
  createUniqueNameValidator,
  RecipeFormStoreFacade,
  WebRecipesRecipeFormDataAccessModule,
} from '@onboarding/web/recipes/recipe-form/data-access';
import {
  DialogService,
  UtilDialogServiceModule,
} from '@onboarding/web/shared/util-dialog-service';
import { AddEditIngredientDialogComponent } from '@onboarding/web/recipes/recipe-form/ui-add-edit-ingredient-dialog';
import { isDirty } from '@onboarding/shared/util';
import { Subscription, combineLatest, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'onboarding-feature-recipe-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WebRecipesRecipeFormDataAccessModule,
    UtilDialogServiceModule,
    SharedUiIngredientChipComponent,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './web-recipes-recipe-form-feature.component.html',
  styleUrls: ['./web-recipes-recipe-form-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesRecipeFormFeatureComponent
  implements OnChanges, OnDestroy
{
  constructor(
    private store: RecipeFormStoreFacade,
    private router: Router,
    private dialogService: DialogService
  ) {}

  @Input() set recipe(_recipe: Recipe | null) {
    if (!_recipe) {
      this.store.initWithEmpty();
    } else {
      this.recipeForm.patchValue({ ..._recipe });
      this.store.storeInitialValue(_recipe);
    }
  }

  @Input() disabled: boolean | null = false;

  @Output() save = new EventEmitter<CreateUpdateRecipePayload>();

  private ingredientsSubscription: Subscription | undefined;

  ingredients$ = this.store.ingredients$;
  isNotEnoughIngredients$ = this.store.isNotEnoughIngredients$;

  recipeForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
      ],
      asyncValidators: [createUniqueNameValidator()],
    }),
    preparationTimeInMinutes: new FormControl(30, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(255),
      ],
    }),
  });

  private isFormDirty$ = this.recipeForm.valueChanges.pipe(
    isDirty(this.store.recipeInitialValue$)
  );

  @Output() dirty = combineLatest([
    this.isFormDirty$,
    this.store.hasIngredientsBeenModified$,
  ]).pipe(map(([form, ingredients]) => form || ingredients));

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']) {
      this.disabled ? this.recipeForm.disable() : this.recipeForm.enable();
    }
  }

  onAddIngredient() {
    if (this.disabled) return;

    this.dialogService
      .openCustomDialog<null, Ingredient>(
        null,
        AddEditIngredientDialogComponent
      )
      .subscribe((result) => {
        if (result) this.store.addIngredient(result);
      });
  }

  onDeleteIngredient(id: string) {
    if (this.disabled) return;

    this.store.deleteIngredient(id);
  }

  onEditIngredient(ingredient: Ingredient) {
    if (this.disabled) return;

    this.dialogService
      .openCustomDialog<Ingredient, Ingredient>(
        ingredient,
        AddEditIngredientDialogComponent
      )
      .subscribe((result) => {
        if (result) this.store.editIngredient(result);
      });
  }

  onSubmit() {
    this.ingredientsSubscription = this.ingredients$.subscribe(
      (ingredients) => {
        this.save.emit({
          ...this.recipeForm.getRawValue(),
          ingredients: [...ingredients],
        });
      }
    );
  }

  onCancel() {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.ingredientsSubscription?.unsubscribe();
    this.store.resetState();
  }
}
