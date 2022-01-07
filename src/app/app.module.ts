import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './@components/about/about.module';
import { ContactModule } from './@components/contact/contact.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { PortfolioModule } from './@components/portfolio/portfolio.module';
import { TitleModule } from './@widgets/title/title.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortfolioModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    CopyrightModule,
    ContactModule,
    AboutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
