import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutAppComponent } from './logout-app.component';

describe('LogoutAppComponent', () => {
  let component: LogoutAppComponent;
  let fixture: ComponentFixture<LogoutAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
