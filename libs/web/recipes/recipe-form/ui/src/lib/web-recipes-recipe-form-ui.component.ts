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
import { UiRecipeForm } from './ui-recipe-form.interface';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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

  @Output() valid = this.recipeForm.statusChanges.pipe(
    map((status) => status === 'VALID'),
    distinctUntilChanged()
  );

  @Output() value = this.recipeForm.valueChanges.pipe(
    map((value) => <UiRecipeForm>value),
    debounceTime(300)
  );
}
