import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit {
  itemId?: any;
  itemName?: any;
  itemType?: any;


  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // this.itemId = this.route.snapshot.paramMap.get('id');
    // this.itemName = this.route.snapshot.paramMap.get('itemName');
    // this.itemType = this.route.snapshot.paramMap.get('itemType');

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.itemId = params.get('id');
      this.itemName = params.get('itemName');
      this.itemType = params.get('itemType');
    });
  }
}
