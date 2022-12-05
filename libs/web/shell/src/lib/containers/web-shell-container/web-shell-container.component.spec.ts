import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebShellContainerComponent } from './web-shell-container.component';

describe('WebShellContainerComponent', () => {
  let component: WebShellContainerComponent;
  let fixture: ComponentFixture<WebShellContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebShellContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebShellContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
