import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="container">
      <p id="ParagraphPageNotFound">
        page-not-found !!
      </p>
   </div>
  `,
  styles: `
  #ParagraphPageNotFound{
     color :red;
     font-weight:bold;
     font-size:46px;
  }
  `
})
export class PageNotFoundComponent {

}
