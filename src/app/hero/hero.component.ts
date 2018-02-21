import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <div>
      <img src="{{ heroImageUrl}}">
      <span [style.text-decoration]="lineThrough">
        {{prefix}} {{hero?.name}}
      </span>
      <button>Delete</button>
    </div>
  `,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
}
