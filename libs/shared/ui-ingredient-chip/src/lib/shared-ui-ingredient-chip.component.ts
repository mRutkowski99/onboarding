import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIngredientChip } from './ui-ingredient-chip.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'onboarding-ui-ingredient-chip',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './shared-ui-ingredient-chip.component.html',
  styleUrls: ['./shared-ui-ingredient-chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiIngredientChipComponent {
  @Input() ingredient: UiIngredientChip | undefined;
  @Input() disabled = false;
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<UiIngredientChip>();

  onDelete() {
    this.delete.emit(this.ingredient?._id);
  }

  onEdit() {
    this.edit.emit(this.ingredient);
  }
}
