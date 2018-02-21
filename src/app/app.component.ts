import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <section
      [style.background-color]="myColor ? myColor : '#00f'"
      [style.color]="'white'"
      >
      <h1>{{ title }}</h1>
    </section>

    <p>My favorite hero is: <b>{{ myHero.name }}</b></p>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes" (myClick)="myEvent(hero.name)"><p>{{ hero.name }}</p></li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <button disabled>{{ title }}</button>
    <p><img src="{{ heroImageUrl }}" alt="Favicon"></p>
    <p><span>"{{title}}" is the <i>interpolation</i> title.</span></p>
    
    <table>
      <tr><td [attr.colspan]="1 + 1">One</td></tr>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </table>

    <form>
      <input [value]="myColor" (input)="myColor=$event.target.value">
    </form>

    <app-hero></app-hero>
    <app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx = $event"></app-sizer>
    <div [style.font-size.px]="fontSizePx">Resizable Text</div>
  `
})
export class AppComponent {
  prefix: any;
  title = 'AMP Project';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
  myFunc = function() {
    return 10;
  }
  myEvent = function(name) {
    console.log(this.title)
  }
  classes = 'thisIsMyClass';
  heroImageUrl = 'favicon.ico';
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  myColor = "red";
  fontSizePx = 10;
}
