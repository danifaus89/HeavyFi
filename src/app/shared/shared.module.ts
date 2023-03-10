//MODULES//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS//
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';

//SERVICES//
import { MainService } from './services/main.service';

//PIPES//
import { NoimagePipe } from '../pipes/noimage.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    CategoryCardComponent,
    ArtistCardComponent,
    NoimagePipe,
    PlaylistCardComponent,
  ],
  imports: [CommonModule],
  providers: [MainService],
  exports: [
    NavbarComponent,
    CategoryCardComponent,
    ArtistCardComponent,
    NoimagePipe,
    PlaylistCardComponent,
  ],
})
export class SharedModule {}
