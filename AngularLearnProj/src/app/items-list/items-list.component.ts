import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  items = [
    { Id: 1, ItemName: "item1", ItemType: "type1", Price: "20$" },
    { Id: 2, ItemName: "item2", ItemType: "type2", Price: "30$" },
    { Id: 3, ItemName: "item3", ItemType: "type3", Price: "40$" },
    { Id: 4, ItemName: "item4", ItemType: "type4", Price: "50$" },
    { Id: 5, ItemName: "item5", ItemType: "type5", Price: "70$" },
  ]

  //ctor
  constructor(private router: Router, private route: ActivatedRoute) { }

  goToItemDetailByID(item: any) {
    this.router.navigate(['/itemDetails', item.Id]);
  }

  goToItemDetail(item: any) {

    // required params
    // this.router.navigate(['/itemDetails', { id: item.Id }]);

    //optional params
    this.router.navigate(['/itemDetails', { id: item.Id, itemName: item.ItemName, itemType: item.ItemType }]);

    // relative navigation for more information see "https://www.c-sharpcorner.com/article/relative-navigation-in-angular/"
    // this.router.navigate([item.id], { relativeTo: this.route });
  }
}
