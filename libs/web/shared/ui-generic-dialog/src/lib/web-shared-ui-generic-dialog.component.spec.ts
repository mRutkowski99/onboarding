import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSharedUiGenericDialogComponent } from './web-shared-ui-generic-dialog.component';

describe('WebSharedUiGenericDialogComponent', () => {
  let component: WebSharedUiGenericDialogComponent;
  let fixture: ComponentFixture<WebSharedUiGenericDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedUiGenericDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiGenericDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
