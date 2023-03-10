import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/service/home.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent {
  playListCat: any[] = [];
  greatestArtists: any[] = [];

  categoryName: string;
  categoryArray: any[] = [];

  constructor(private router: ActivatedRoute, private homeS: HomeService) {}

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.router.params.subscribe((params) => {
      console.log(params);
      this.getPlaylist(params['id']);
      this.getCategory(params['id']);
      this.getGreatestArtists();
      console.log(this.categoryArray);
    });
  }

  getPlaylist(id: any) {
    this.homeS.getPlaylistCategories(id).subscribe((pl) => {
      this.playListCat = pl;
      console.log(this.playListCat);
      this.categoryArray.push(this.playListCat);
    });
  }
  getCategory(id: any) {
    this.homeS.getCategory(id).subscribe((cat) => {
      this.categoryName = cat.name;

      console.log(this.categoryName);
    });
  }

  getGreatestArtists() {
    this.homeS.getGratestArtist().subscribe((ga) => {
      this.greatestArtists = ga;
      console.log(this.greatestArtists);
      this.categoryArray.push(this.greatestArtists);
    });
  }

  //PRIVATE//
  goToAllPlayList() {
    //fer crida sense limit i mostrarles totes
  }
}
