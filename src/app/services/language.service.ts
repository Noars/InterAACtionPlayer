import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivationEnd, Router} from "@angular/router";
import { filter, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public startLanguage: string = "default";
  public activeLanguage: string;

  /**
   * @param translate -> Initialize ngx-translate library
   * @param router
   *
   * Set language to default
   */
  constructor(private translate: TranslateService, private router: Router) {
      this.translate.setDefaultLang(this.startLanguage);
      this.router.events.pipe(
        filter(e => (e instanceof ActivationEnd) && (Object.keys(e.snapshot.params).length > 0)),
        map(e => e instanceof ActivationEnd ? e.snapshot.params : {})
      ).subscribe(params => {
        console.log(Object.values(params)[0]);
        this.activeLanguage = Object.values(params)[0];
      });
      setTimeout(() => {
        this.switchLanguage();
      }, 300);
  }

  /**
   * Activate the language that has been chosen
   */
  public switchLanguage(){
    this.activeLanguage = location.href.substring(24, 26);
    this.translate.use(this.activeLanguage);
  }
}
