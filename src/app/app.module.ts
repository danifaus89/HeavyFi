//MODULES//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

//COMPONENTS//
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';

//SERVICES//

@NgModule({
  declarations: [AppComponent, HomeComponent, ArtistsComponent, CategoryPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
