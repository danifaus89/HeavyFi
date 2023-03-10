import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  goToCategory(item: any) {
    console.log(item);
    this.router.navigate(['/category', item.id]);
  }
}
