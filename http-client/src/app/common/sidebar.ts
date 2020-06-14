
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  template: `
  <h1 class="my-4">User Name</h1>
      <div class="list-group">
          <a href="#" class="list-group-item">Category 1</a>
          <a href="#" class="list-group-item">Category 2</a>
          <a href="#" class="list-group-item">Category 3</a>
      </div>
  `,
  styles: []
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
