import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListItem } from './recipe-list-item.interface';
import { UtilClickStopPropagationDirectiveModule } from '@onboarding/shared/util-click-stop-propagation-directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'onboarding-ui-recipe-list-item',
  standalone: true,
  imports: [
    CommonModule,
    UtilClickStopPropagationDirectiveModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
  ],
  templateUrl: './shared-ui-recipe-list-item.component.html',
  styleUrls: ['./shared-ui-recipe-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiRecipeListItemComponent {
  @Input() recipe: RecipeListItem | undefined;
  @Input() isSelected = true;
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();
  @Output() selected = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.recipe?._id);
  }

  onEdit() {
    this.edit.emit(this.recipe?._id);
  }

  onSelect() {
    this.selected.emit(this.recipe?._id);
  }
}
