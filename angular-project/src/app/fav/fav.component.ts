import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  @Input() favDataFromParent:any;

  constructor() { }

  ngOnInit(): void {
  }

}
