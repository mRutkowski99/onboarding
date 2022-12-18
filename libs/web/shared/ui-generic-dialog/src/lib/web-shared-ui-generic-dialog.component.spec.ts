import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSharedUiGenericDialogComponent } from './web-shared-ui-generic-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericDialogPayload } from '@onboarding/shared/domain';
import { By } from '@angular/platform-browser';

describe('WebSharedUiGenericDialogComponent', () => {
  let component: WebSharedUiGenericDialogComponent;
  let fixture: ComponentFixture<WebSharedUiGenericDialogComponent>;
  const dialogPayload: GenericDialogPayload = {
    message: 'simple \n message',
    noOptionMsg: 'Cancel',
    yesOptionMsg: 'Confirm',
    onlyConfirm: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedUiGenericDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: dialogPayload }],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiGenericDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should display message', () => {
    const paragraphs = fixture.debugElement.queryAll(By.css('p'));
    const message = dialogPayload.message.split('\n');

    expect(paragraphs.map((p) => p.nativeElement.textContent)).toEqual(message);
    expect(paragraphs.length).toBe(message.length);
  });

  test('should display confirmation button with given message', () => {
    const button = fixture.debugElement.query(By.css('#yesOptionBtn'));

    expect(button.nativeElement.textContent).toContain(
      dialogPayload.yesOptionMsg.toUpperCase()
    );
  });

  test('should display cancellation button with given message', () => {
    const button = fixture.debugElement.query(By.css('#noOptionBtn'));

    expect(button.nativeElement.textContent).toContain(
      dialogPayload.noOptionMsg.toUpperCase()
    );
  });
});

describe('Generic dialog with one button', () => {
  let component: WebSharedUiGenericDialogComponent;
  let fixture: ComponentFixture<WebSharedUiGenericDialogComponent>;
  const dialogPayload: GenericDialogPayload = {
    message: 'simple \n message',
    noOptionMsg: 'Cancel',
    yesOptionMsg: 'Confirm',
    onlyConfirm: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedUiGenericDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: dialogPayload }],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiGenericDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should display only confirmation button', () => {
    const noOptionBtn = fixture.debugElement.query(By.css('#noOptionBtn'));

    expect(noOptionBtn).toBeFalsy();
  });
});
