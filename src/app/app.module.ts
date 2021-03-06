import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ChartModule,HIGHCHARTS_MODULES } from 'angular-highcharts';


import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as arc from 'highcharts/modules/solid-gauge.src';
import * as data from 'highcharts/modules/data.src';

import { AppComponent } from './app.component';
import { NewsDivComponent } from './news-div/news-div.component';
import { StatsDivComponent } from './stats-div/stats-div.component';
import { HeaderDivComponent } from './header-div/header-div.component';
import { MarketPricesComponent } from './market-prices/market-prices.component';
import { HedgeDivComponent } from './hedge-div/hedge-div.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import * as $ from 'jquery';
import { ChartdataComponent } from './chartdata/chartdata.component';
import { ScoringComponent } from './scoring/scoring.component';
import { ColorSchemeComponent } from './color-scheme/color-scheme.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { DeletesectionComponent } from './deletesection/deletesection.component';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { ConsolidatedDivComponent } from './consolidated-div/consolidated-div.component';
import { TopconsolidatedDivComponent } from './topconsolidated-div/topconsolidated-div.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { WeeklyDivComponent } from './weekly-div/weekly-div.component';

@NgModule({
  declarations: [
  AppComponent,
  NewsDivComponent,
  StatsDivComponent,
  HeaderDivComponent,
  MarketPricesComponent,
  HedgeDivComponent,
  NewsDetailsComponent,
  ChartdataComponent,
  ScoringComponent,
  ColorSchemeComponent,
  DeletesectionComponent,
  WorldmapComponent,
  ChartDetailComponent,
  ConsolidatedDivComponent,
  TopconsolidatedDivComponent,
  ErrorPageComponent,
  WeeklyDivComponent
  ],
  imports: [
  HttpClientModule,
  FormsModule,
  BrowserModule,
  ChartModule,
  BrowserAnimationsModule,
  MaterialModule,
  AppRoutingModule
  ],
  providers: [
    [ CookieService ],
  { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, arc,data ] }
  ],
  bootstrap: [AppComponent]
  })
 export class AppModule {
  }
