import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routingComponents } from './app.routes'; //include test and employees components

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, routingComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularLearnProj';
  //for send name to child component as testComponent
  public parentName = 'zaid albaik';
  //for receved message from child component as testComponent
  public message = '';

}
