import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {OverviewComponent} from './overview/overview.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OverviewSearchComponent} from './overview/overview-search/overview-search.component';
import { OverviewResultComponent } from './overview/overview-result/overview-result.component';
import { OverviewResultRowComponent } from './overview/overview-result-row/overview-result-row.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    OverviewComponent,
    OverviewSearchComponent,
    OverviewResultComponent,
    OverviewResultRowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
