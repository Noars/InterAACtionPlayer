import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public startLanguage: string = "fr";
  public activeLanguage: string;

  /**
   * @param translate -> Initialize ngx-translate library
   * @param activatedRoute
   *
   * Set language to default
   */
  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {
      this.translate.setDefaultLang(this.startLanguage);
      this.activeLanguage = location.href.substring(24,26);
      setTimeout(() => {
        this.switchLanguage();
      }, 300);
  }

  /**
   * Activate the language that has been chosen
   */
  public switchLanguage(){
    this.translate.use(this.activeLanguage);
  }
}
