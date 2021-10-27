import { TestBed } from '@angular/core/testing';

import { DefaultService } from './default.service';
import { TranslateModule } from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('DefaultService', () => {
  let service: DefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot(), RouterTestingModule ]
    });
    service = TestBed.inject(DefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
