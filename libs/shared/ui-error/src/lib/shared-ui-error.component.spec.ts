import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SharedUiErrorComponent } from './shared-ui-error.component';

describe('SharedUiErrorComponent', () => {
  let component: SharedUiErrorComponent;
  let fixture: ComponentFixture<SharedUiErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should emit #reload after click on button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    jest.spyOn(component.reload, 'emit');

    button.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.reload.emit).toBeCalled();
  });
});
