import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';
import { AuthguardService } from '../../../../src/app/services/authguard.service';
import { LanguageService } from "../../../../src/app/services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'spotify';

  constructor(private globalService: GlobalService,
              private router: Router,
              private authGuardService: AuthguardService,
              private languageService: LanguageService) {
  }

  /**
   * Initialize token for the Spotify Api
   * Check if the user is logged
   * When the token is initialize, 300ms after we go to the spotify/home web page
   */
  ngOnInit(): void {
    this.globalService.accessToken;
    this.router.navigate([this.languageService.activeLanguage + '/spotify/home']);
  }
}
