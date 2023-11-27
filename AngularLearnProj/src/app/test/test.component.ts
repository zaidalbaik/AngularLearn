import { Component, EventEmitter, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})

export class TestComponent {

  //get
  public get platformId(): Object {
    return this._platformId;
  }
  public name = "Hello";
  public url = "";
  public cssClass = "text-primary"
  public isError = true;
  public isSuccess = true;
  public testText = 0;
  public msgBindings!: string;
  public textOneWay = 'default value';

  fontSize = 16; // Initial font size

  public titleStyle = {
    color: "Orange",
    backgroundColor: "black",
    textDecoration: "underline",
  }

  public tstClass = {
    "text-danger": !this.isSuccess,
    "text-success": this.isSuccess
  }

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: Object) {
    this.name = "zaid";

    if (isPlatformBrowser(this.platformId)) {
      // Only access window object in a browser environment
      this.url = window.location.href;

    }
  }
  onClick(ev: object): void {
    this.testText += 1;
  }
  onInputClick(val: string): void {
    console.log(val);
  }
  keyup(value: string) {
    this.textOneWay = value;
  }
  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    this.fontSize = Math.max(2, this.fontSize - 2);
  }
}


// @Component({
//   selector: 'app-ss',
//   standalone: true,
//   template: `<h1>Heloooooooooooooooooooooooooooooo</h1>`,
//   imports: [CommonModule]
// })
// export class SComponent {
//   title = 'AngularLearnProj';
// }




// // learn Type Script

// interface Car {
//   name: string;
//   color: string;
//   getColor(): string;
//   getName(): string;
// }

// class Toyota implements Car {
//   constructor(public name: string, public color: string) {
//   }


//   getColor(): string {
//     return this.color;
//   }
//   getName(): string {
//     return this.name;
//   }
// }

// let c = new Toyota("toyota", "red");

// console.log(c.color);
// console.log(c.name);
// console.log(c.getColor());

// enum days {
//   sun,
//   mon,
//   tus,
//   wed,
//   ther,
//   fri,
//   sat
// }

// // let arr = [days.fri, days.sat];
// // arr.forEach(r => document.write(`
// // <p class='rr'>${r}</p>
// // `));
