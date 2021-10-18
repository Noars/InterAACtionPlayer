import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public activeLanguage: string = 'en';

  /**
   * @param translate -> Initialize ngx-translate library
   *
   * Set the default language to English (en)
   */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLanguage);
  }

  /**
   * @param language -> The language the user wants to use
   *
   * Set the language choose by the user in the activeLanguage variable
   * Activate the language that the user has chosen
   */
  public switchLanguage(language: string){
    this.activeLanguage = language;
    this.translate.use(language);
  }

  public getActiveLanguage(){
    return this.activeLanguage;
  }
}
