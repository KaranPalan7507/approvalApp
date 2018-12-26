import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MatTabsModule } from '@angular/material';
import { ListComponent } from './list/list.component';
import {MatButtonModule} from '@angular/material/button';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListItemComponent,
    ListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
