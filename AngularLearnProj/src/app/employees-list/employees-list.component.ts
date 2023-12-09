import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

import { FormsModule } from '@angular/forms';
import { IEmployee, IStatus } from '../Models/IEmployee';
import { Observable, Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesListComponent implements OnInit /*, OnDestroy*/ {

  listOfEmployees?: IEmployee[];
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit(): void {
    this._employeeService.getStatus().subscribe(s => this.listOfEmployees = s.data);
  }

  // listOfEmployees: IEmployee[] = [];
  // employeeSubscription?: Subscription;
  // statusObserver = {
  //   next: (statusData: IStatus) => {
  //     this.listOfEmployees = statusData.data;
  //     this.cd.markForCheck();
  //   },
  //   error: (error: any) => { console.log(error) },
  //   complete: () => { console.log('employee stream completed ') }
  // }

  // constructor(private _employeeService: EmployeeService, private cd: ChangeDetectorRef) { }

  // ngOnInit(): void {
  //   this.employeeSubscription = this._employeeService.getEmployees().subscribe(this.statusObserver);
  // }

  // ngOnDestroy(): void {
  //   if (this.employeeSubscription) {
  //     this.employeeSubscription.unsubscribe();
  //   }
  // }
}
