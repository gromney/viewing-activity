import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'va-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  show_about = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAbout(){
    this.show_about = !this.show_about;
  }

}
