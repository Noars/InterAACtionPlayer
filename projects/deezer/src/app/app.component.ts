import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../src/app/services/theme.service';
import { Router } from '@angular/router';
import { AuthguardService } from '../../../../src/app/services/authguard.service';
import {LanguageService} from "../../../../src/app/services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'deezer';
  theme = "";

  /**
   * @param themeService
   * @param router
   * @param authGuardService
   * @param languageService
   *
   * Allows to initialize the page with the right theme
   * Then we go to the deezer/search web page
   */
  constructor(private themeService: ThemeService,
              private router: Router,
              private authGuardService: AuthguardService,
              private languageService: LanguageService) {
    this.theme = themeService.theme;
    this.router.navigate([this.languageService.activeLanguage + '/deezer/search']);
  }

  ngOnInit(): void {
  }
}
