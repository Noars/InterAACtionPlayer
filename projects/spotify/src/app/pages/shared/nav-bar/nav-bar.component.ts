import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../../../../src/app/services/theme.service';
import { LanguageService } from "../../../../../../../src/app/services/language.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  theme = "";

  constructor(private themeService: ThemeService,
              private languageService: LanguageService,
              private router: Router) {
    this.theme = themeService.theme;
  }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate([this.languageService.activeLanguage + '/spotify/home']);
  }

  goSearch(){
    this.router.navigate([this.languageService.activeLanguage + '/spotify/search']);
  }

  goPlaylist(){
    this.router.navigate([this.languageService.activeLanguage + '/playlist']);
  }
}
