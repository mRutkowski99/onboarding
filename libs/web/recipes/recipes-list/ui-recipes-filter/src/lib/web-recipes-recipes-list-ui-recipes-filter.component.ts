import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListFilterTypeEnum } from '@onboarding/web/recipes/recipes-list/util';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'onboarding-ui-recipes-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './web-recipes-recipes-list-ui-recipes-filter.component.html',
  styleUrls: ['./web-recipes-recipes-list-ui-recipes-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesRecipesListUiRecipesFilterComponent {
  form = new FormGroup({
    filterPhrase: new FormControl('', { nonNullable: true }),
  });
  filterTypeEnum = RecipesListFilterTypeEnum;

  @Input() filterType!: RecipesListFilterTypeEnum;

  @Output() filterTypeChange = new EventEmitter<RecipesListFilterTypeEnum>();
  @Output() filterChange = this.form.controls.filterPhrase.valueChanges.pipe(
    distinctUntilChanged(),
    debounceTime(300)
  );

  onFilterTypeChange(event: MatButtonToggleChange) {
    this.filterTypeChange.emit(event.value);
  }
}
