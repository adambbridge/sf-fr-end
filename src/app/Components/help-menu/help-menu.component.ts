import { Component, OnInit, Input } from '@angular/core';
import help from "../../../assets/helpMenuContent.json";

@Component({
  selector: 'app-help-menu',
  templateUrl: './help-menu.component.html',
  styleUrls: ['./help-menu.component.css']
})
export class HelpMenuComponent implements OnInit {
    @Input() topic;
    content; 

  constructor() { }

  ngOnInit() {
      this.content = help[this.topic];
      console.log(this.topic, help, this.content)
  }

}
