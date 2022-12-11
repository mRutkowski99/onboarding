import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ingredient } from '@onboarding/shared/domain';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'onboarding-web-recipes-recipe-form-ui-add-edit-ingredient-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl:
    './web-recipes-recipe-form-ui-add-edit-ingredient-dialog.component.html',
  styleUrls: [
    './web-recipes-recipe-form-ui-add-edit-ingredient-dialog.component.scss',
  ],
})
export class AddEditIngredientDialogComponent implements OnInit {
  id: string | undefined;
  name: string;
  quantity: string;

  ingredientForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    quantity: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(@Inject(MAT_DIALOG_DATA) ingredient: Ingredient | null) {
    this.id = ingredient?._id;
    this.name = ingredient?.name || '';
    this.quantity = ingredient?.quantity || '';
  }

  ngOnInit(): void {
    this.ingredientForm.setValue({ name: this.name, quantity: this.quantity });
  }

  onSubmit(): Ingredient {
    return {
      _id: this.id || crypto.randomUUID(),
      ...this.ingredientForm.getRawValue(),
    };
  }
}
