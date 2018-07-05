import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  sub: Subscription;

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const categoryId = params['categoryId'];
      alert(categoryId);
    });
  }

}
