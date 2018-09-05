import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ChartModule,HIGHCHARTS_MODULES } from 'angular-highcharts';

import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as arc from 'highcharts/modules/solid-gauge.src';


import { AppComponent } from './app.component';
import { NewsDivComponent } from './news-div/news-div.component';
import { StatsDivComponent } from './stats-div/stats-div.component';
import { HeaderDivComponent } from './header-div/header-div.component';
import { MarketPricesComponent } from './market-prices/market-prices.component';
import { HedgeDivComponent } from './hedge-div/hedge-div.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import * as $ from 'jquery';
import { ChartdataComponent } from './chartdata/chartdata.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsDivComponent,
    StatsDivComponent,
    HeaderDivComponent,
    MarketPricesComponent,
    HedgeDivComponent,
    NewsDetailsComponent,
    ChartdataComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, arc ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
