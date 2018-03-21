import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-featured-panel',
  templateUrl: './featured-panel.component.html',
  styleUrls: ['./featured-panel.component.css']
})

export class FeaturedPanelComponent implements OnInit {

  @Input() Title: string;
  @Input() Image : string;
  @Input() Description : string

  constructor() { }

  ngOnInit() {
  }
}
