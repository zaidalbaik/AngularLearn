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

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // this.itemId = this.route.snapshot.paramMap.get('id');
    // this.itemName = this.route.snapshot.paramMap.get('itemName');

    this.itemId = this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get(`id`) as string);
      this.itemId = id;
    });
  }
}
