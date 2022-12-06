import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Recipe } from '@onboarding/shared/domain';
import { SharedUiRecipeDetailsComponent } from '@onboarding/shared/ui-recipe-details';

@Component({
  selector: 'onboarding-web-recipes-recipe-details-feature',
  standalone: true,
  imports: [CommonModule, SharedUiRecipeDetailsComponent],
  templateUrl: './web-recipes-recipe-details-feature.component.html',
  styleUrls: ['./web-recipes-recipe-details-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesRecipeDetailsFeatureComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  recipe$!: Observable<Recipe>;

  ngOnInit(): void {
    this.recipe$ = this.activatedRoute.data.pipe(
      map((data) => data['recipe'] as Recipe)
    );
  }
}
