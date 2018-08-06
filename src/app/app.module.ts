import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsDivComponent } from './news-div/news-div.component';
import { StatsDivComponent } from './stats-div/stats-div.component';
import { HeaderDivComponent } from './header-div/header-div.component';
import { MarketPricesComponent } from './market-prices/market-prices.component';
import { HedgeDivComponent } from './hedge-div/hedge-div.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsDivComponent,
    StatsDivComponent,
    HeaderDivComponent,
    MarketPricesComponent,
    HedgeDivComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
