import { Component } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  categories: any[] = [];

  error: boolean;
  mensajeError: string;

  constructor(private homeS: HomeService) {}

  ngOnInit() {
    this.error = false;

    this.homeS.getCategories().subscribe(
      (data: any) => {
        this.categories.push(data[6]);
        this.categories.push(data[7]);
        this.categories.push(data[8]);
        this.categories.push(data[17]);
        this.categories.push(data[20]);
        this.categories.push(data[21]);
        this.categories.push(data[27]);
        this.categories.push(data[35]);
        this.categories.push(data[37]);
        this.categories.push(data[41]);
        this.categories.push(data[42]);
        this.categories.push(data[43]);
      },
      (error) => {
        this.error = true;
        //console.log(errorServicio);
      }
    );
  }
}
