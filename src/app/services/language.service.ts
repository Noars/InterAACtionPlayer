import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public startLanguage: string = "default";
  public activeLanguage: string = location.href.substring(24, 26);

  /**
   * @param translate -> Initialize ngx-translate library
   *
   * Set the default language to French (fr)
   */
  constructor(private translate: TranslateService) {
      this.translate.setDefaultLang(this.startLanguage);
      setTimeout(() => {
        this.switchLanguage();
      }, 500);
  }

  /**
   * Activate the language that has been chosen
   */
  public switchLanguage(){
    this.translate.use(this.activeLanguage);
  }
}
