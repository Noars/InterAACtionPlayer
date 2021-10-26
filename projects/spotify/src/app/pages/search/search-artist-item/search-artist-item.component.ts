import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../../../../../src/app/services/theme.service';
import {LanguageService} from "../../../../../../../src/app/services/language.service";

@Component({
  selector: 'app-search-artist-item',
  templateUrl: './search-artist-item.component.html',
  styleUrls: ['./search-artist-item.component.css']
})
export class SearchArtistItemComponent implements OnInit {
  @Input() artist: any;

  theme = "";

  constructor(private router: Router,
              private themeService: ThemeService,
              private languageService: LanguageService) {
    this.theme = themeService.theme;
  }

  ngOnInit(): void {
  }

  /**
   * @param artist
   *
   * When the user click on a artist, it makes him navigate to the artist web page
   */
  public navigate(artist: any): void {
    this.router.navigate([this.languageService.activeLanguage + '/spotify/artist', artist.id]);
  }
}
