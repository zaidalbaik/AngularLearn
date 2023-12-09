import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEmployee, IStatus } from '../Models/IEmployee';
import { EmployeeService } from '../services/employee.service';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
  // encapsulation: ViewEncapsulation.None,
})

export class TestComponent implements OnInit /*, OnDestroy*/ {

  public name = "Hello";
  public url = "";
  public cssClass = "text-primary"
  public isError = true;
  public isSuccess = true;
  public testText = 0;
  public msgBindings!: string;
  public textOneWay = 'default value';
  public color = "Orange";
  public colorArray = ["Red", "Yellow", "Green"];
  fontSize = 16; // Initial font size
  public data = new Date();
  listOfEmployees?: IEmployee[];

  //for unsubscribe
  // employeeSubscription?: Subscription;

  public titleStyle = {
    color: "Orange",
    backgroundColor: "black",
    textDecoration: "underline",
  }

  public tstClass = {
    "text-danger": !this.isSuccess,
    "text-success": this.isSuccess
  }

  //from parent component 'appComponent'
  //for access this public variable from parent component and bind this field to parent field use @Input('bindingName') keyword
  //ex:
  //@Input() public parentData = '';
  //or use this syntax for use alias names
  @Input('parentData') public pa2: any;

  //note: inject in Dependency injection :
  //for inject service use 'inject' method or  inject instance in constructor as param
  constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  //for implement event use output()s
  @Output() public childEvent = new EventEmitter();
  childEventOnClick() {
    this.childEvent.emit('Hi zaid how are you');
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

  //overrides methods
  ngOnInit(): void {
    //initialize data here
    this.name = "zaid";
    this._employeeService.getStatus().subscribe(s => this.listOfEmployees = s.data);
  }

  showEmployeeList() {
    this.router.navigate(['employeeList'], { relativeTo: this.route });
  }
}


// learn Type Script

// interface Car {
//   name: string;
//   color: string;
//   getColor(): string;
//   getName(): string;
// }

// class Toyota implements Car {
//   constructor(public name: string, public color: string) {
//   }
//
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
