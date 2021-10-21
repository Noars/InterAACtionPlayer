import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from '../../../../../projects/spotify/src/app/services/global.service';
import { NotifierService } from 'angular-notifier';
import { TranslateService } from '@ngx-translate/core';
import {normalizePassiveListenerOptions} from "@angular/cdk/platform";

/**
 * Import functions javascript
 */
declare var loginDeezer: any;
declare var logoutDeezer: any;
declare var initStatusDeezer: any;
declare var getStatusDeezer: any;

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  statusDeezer;

  constructor(private dialog: MatDialog,
              private globalService: GlobalService,
              private notifier: NotifierService,
              private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  /**
   * Allows the user to login Spotify
   */
  loginSpotify(){
    this.globalService.getLoginAccountSpotify();
  }

  /**
   * Allows the user to logout Spotify
   */
  logoutSpotify(){
    this.globalService.getLogoutAccountSpotify();
    this.notifier.notify('warning',this.translate.instant('notifier.logoutSpotify'));
  }

  /**
   * Allows the user to login Deezer
   */
  loginDeezer(){
    loginDeezer();
    initStatusDeezer();
    this.getStatusDeezer();
  }

  getStatusDeezer(){
    this.statusDeezer = getStatusDeezer();
    console.log(this.statusDeezer);
    setTimeout(() => {
      if (this.statusDeezer != 'connected' || 'notConnected' || 'unknown' || 'not_authorized'){
        this.getStatusDeezer();
      }
    }, 1000);
  }

  /**
   * Allows the user to logout Deezer
   */
  logoutDeezer(){
    logoutDeezer();
    this.notifier.notify('warning',this.translate.instant('notifier.logoutDeezer'));
  }

  /**
   * If the user cancel the save then close the DialogComponent
   */
  public goCancel(){
    this.dialog.closeAll();
  }
}
