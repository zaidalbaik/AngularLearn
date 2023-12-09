import { Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

export const routes: Routes = [
  { path: "", redirectTo: "/testPage", pathMatch: "full" },
  { path: "employeeList", component: EmployeesListComponent },
  {
    path: "testPage", component: TestComponent,
    children: [
      { path: "employeeList", component: EmployeesListComponent },
    ]
  },
  { path: "itemsList", component: ItemsListComponent },
  { path: "itemDetails", component: ItemDetailsComponent },//for optional params
  { path: "itemDetails/:id", component: ItemDetailsComponent },
  { path: "**", component: PageNotFoundComponent }
];

export const routingComponents = [
  EmployeesListComponent,
  TestComponent,
  PageNotFoundComponent,
  ItemsListComponent,
  ItemDetailsComponent
];
