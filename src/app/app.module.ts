import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { HeroComponent } from './hero/hero.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesAltComponent } from './features-alt/features-alt.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';
import { DataComponent } from './data/data.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';

//primeng modules
import {AccordionModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/primeng';
import {ColorPickerModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/primeng';
import {ContextMenuModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {LightboxModule} from 'primeng/primeng';
import {ListboxModule} from 'primeng/primeng';
import {MegaMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {OverlayPanelModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SelectButtonModule} from 'primeng/primeng';
import {SlideMenuModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {StepsModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ClientsComponent,
    HomeComponent,
    FeaturesComponent,
    FeaturesAltComponent,
    NavigationComponent,
    BenefitsComponent,
    AboutComponent,
    FooterComponent,
    HelpComponent,
    DataComponent,
    FaqsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    HttpClientModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    OverlayPanelModule,
    PanelModule,
    PanelMenuModule,
    RadioButtonModule,
    ScrollPanelModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
