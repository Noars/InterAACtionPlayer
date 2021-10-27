import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';
import { TranslateModule } from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot(), RouterTestingModule ]
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
