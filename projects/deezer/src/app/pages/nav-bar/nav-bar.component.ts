import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../../../src/app/services/theme.service';
import {Router} from "@angular/router";
import {LanguageService} from "../../../../../../src/app/services/language.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  theme = "";

  constructor(private themeService: ThemeService, private router: Router, private laguageService: LanguageService) {
    this.theme = themeService.theme;
  }

  ngOnInit(): void {
  }

  goSearch(){
    this.router.navigate([this.laguageService.activeLanguage + '/deezer/search']);
  }

  goPlaylist(){
    this.router.navigate([this.laguageService.activeLanguage + '/playlist']);
  }
}
