import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
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
import { Ingredient, Recipe } from '@onboarding/shared/domain';
import {
  RecipeFormStoreFacade,
  WebRecipesRecipeFormDataAccessModule,
} from '@onboarding/web/recipes/recipe-form/data-access';
import {
  DialogService,
  UtilDialogServiceModule,
} from '@onboarding/web/shared/util-dialog-service';
import { AddEditIngredientDialogComponent } from '@onboarding/web/recipes/recipe-form/ui-add-edit-ingredient-dialog';

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
export class WebRecipesRecipeFormFeatureComponent {
  constructor(
    private store: RecipeFormStoreFacade,
    private location: Location,
    private dialogService: DialogService
  ) {}

  @Input() set recipe(_recipe: Recipe | undefined) {
    if (_recipe === undefined) return;
    this.recipeForm.patchValue({ ..._recipe });
    this.store.storeIngredients(_recipe.ingredients);
  }

  @Output() value = new EventEmitter<Recipe>();

  ingredients$ = this.store.ingredients$;
  isNotEnoughIngredients$ = this.store.isNotEnoughIngredients$;
  hasIngredientsBeenModified$ = this.store.hasIngredientsBeenModified$;

  isFormDirty = false;

  recipeForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
      ],
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

  onAddIngredient() {
    this.dialogService
      .openCustomDialog<null, Ingredient>(
        null,
        AddEditIngredientDialogComponent,
        {}
      )
      .subscribe((result) => {
        if (result) this.store.addIngredient(result);
      });
  }

  onDeleteIngredient(id: string) {
    this.store.deleteIngredient(id);
  }

  onEditIngredient(ingredient: Ingredient) {
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
    //
  }

  onCancel() {
    const subscription = this.hasIngredientsBeenModified$.subscribe(
      (beenModified) => {
        this.isFormDirty = this.recipeForm.dirty || beenModified;
        this.location.back();
        subscription.unsubscribe();
      }
    );
  }
}
