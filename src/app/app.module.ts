import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { NewsDivComponent } from './news-div/news-div.component';
import { StatsDivComponent } from './stats-div/stats-div.component';
import { HeaderDivComponent } from './header-div/header-div.component';
import { MarketPricesComponent } from './market-prices/market-prices.component';
import { HedgeDivComponent } from './hedge-div/hedge-div.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    NewsDivComponent,
    StatsDivComponent,
    HeaderDivComponent,
    MarketPricesComponent,
    HedgeDivComponent,
    NewsDetailsComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
