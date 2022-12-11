import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from '@onboarding/web/shared/util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'onboarding-web-recipes-edit-recipe-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-recipes-edit-recipe-feature.component.html',
  styleUrls: ['./web-recipes-edit-recipe-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesEditRecipeFeatureComponent
  implements FormContainerComponent, OnInit, OnDestroy
{
  constructor(private route: ActivatedRoute) {}

  dirty = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
