import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//services
import { RedirectionService } from './dataservices/redirection.service';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { IndexSliderOneComponent } from './common/index-slider-one/index-slider-one.component';
import { OurServicesComponent } from './common/our-services/our-services.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterUpComponent } from './common/footer-up/footer-up.component';
import { OfferingComponent } from './offering/offering.component';
import { ExpertiseComponent } from './expertise/expertise.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexSliderOneComponent,
    OurServicesComponent,
    FooterComponent,
    HomePageComponent,
    ContactUsComponent,
    AboutUsComponent,
    FooterUpComponent,
    OfferingComponent,
    ExpertiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RedirectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
