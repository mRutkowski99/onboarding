import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  UiRecipeForm,
  UiRecipeFormIngredient,
} from './ui-recipe-form.interface';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'onboarding-ui-recipe-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './web-recipes-recipe-form-ui.component.html',
  styleUrls: ['./web-recipes-recipe-form-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesRecipeFormUiComponent {
  @Input() set recipe(_recipe: UiRecipeForm | undefined) {
    if (!_recipe) return;
    this.recipeForm.setValue({ ..._recipe });
  }

  @Input() set disabled(_disabled: boolean) {
    _disabled ? this.recipeForm.disable() : this.recipeForm.enable();
  }

  @Input() ingredients: UiRecipeFormIngredient[] = [];

  @Output() value = new EventEmitter<
    UiRecipeForm & { ingredients: UiRecipeFormIngredient[] }
  >();
  @Output() cancel = new EventEmitter<boolean>();

  private hasIngredientsBeenModified = false;

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

  onCancel() {
    this.cancel.emit(this.recipeForm.dirty || this.hasIngredientsBeenModified);
  }

  onSubmit() {
    this.value.emit({
      ...this.recipeForm.getRawValue(),
      ingredients: [...this.ingredients],
    });
  }
}
