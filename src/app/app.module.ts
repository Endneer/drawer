import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerContainerComponent } from './drawer-container/drawer-container.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SampleDrawerComponentComponent } from './sample-drawer-component/sample-drawer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawerContainerComponent,
    DrawerComponent,
    SampleDrawerComponentComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
