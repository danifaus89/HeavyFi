import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/pages/home/service/home.service';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css'],
})
export class PlaylistCardComponent {
  @Input() items: any[] = [];

  constructor(private router: ActivatedRoute, private homeS: HomeService) {}

  ngOnInit() {}

  goToPlayList(item: any) {
    console.log(item);
  }
}
