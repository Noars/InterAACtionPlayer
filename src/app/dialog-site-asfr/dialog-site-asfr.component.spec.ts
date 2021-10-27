import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSiteASFRComponent } from './dialog-site-asfr.component';

describe('DialogSiteASFRComponent', () => {
  let component: DialogSiteASFRComponent;
  let fixture: ComponentFixture<DialogSiteASFRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSiteASFRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSiteASFRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
