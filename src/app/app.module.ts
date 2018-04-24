import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GeneralService} from './general.service';
import {GeneralComponent} from './general/general.component';
import {HttpClientModule} from '@angular/common/http';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {AgmCoreModule} from '@agm/core';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    FeaturesComponent,
    TeamComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    Ng2PageScrollModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBjtzdOyCDiQ4EAuX9hmslTlQsXAsZ6800'}),
    FlexLayoutModule
  ],
  providers: [
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
