import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportuserComponent } from './importuser.component';
import {MatDialogModule} from '@angular/material/dialog';
import {TranslateModule} from '@ngx-translate/core';

describe('ImportuserComponent', () => {
  let component: ImportuserComponent;
  let fixture: ComponentFixture<ImportuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportuserComponent ],
      imports: [MatDialogModule,TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
