import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BlocksPageComponent } from './components/blocks-page/blocks-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TablePageComponent } from './components/table-page/table-page.component';
import { UserComponent } from './components/user/user.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    BlocksPageComponent,
    TablePageComponent,
    UserComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
