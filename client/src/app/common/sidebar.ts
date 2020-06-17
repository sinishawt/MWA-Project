
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  template: `
  <h3 class="my-4"> welcome user</h3>
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
