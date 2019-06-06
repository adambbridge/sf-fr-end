import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-update',
  templateUrl: './new-update.component.html',
  styleUrls: ['./new-update.component.css']
})
export class NewUpdateComponent implements OnInit {

    // get stored data passed by open method from angular material 
  constructor(@Inject(MAT_DIALOG_DATA) private passedData: any) { }

  ngOnInit() {
  }

}
