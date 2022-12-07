import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'onboarding-web-recipes-add-recipe-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-recipes-add-recipe-feature.component.html',
  styleUrls: ['./web-recipes-add-recipe-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesAddRecipeFeatureComponent {}
