import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sizer',
  template: `
  	<div>
			<button (click)="dec()" title="smaller"> - </button>
			<button (click)="inc()" title="bigger"> + </button>
			<label [style.font-size.px]="size">FontSize: {{size}}px</label>
  	</div>
  `,
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent {
	@Input()  size: number | string;
	@Output() sizeChange = new EventEmitter<number>();

	dec() { this.resize(-2); }
	inc() { this.resize(2); }

	resize(delta: number) {
		this.size = Math.min(40, Math.max(8, +this.size + delta));
		this.sizeChange.emit(this.size);
	}

  constructor() { }
  ngOnInit() {
  }
}
