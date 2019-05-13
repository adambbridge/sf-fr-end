import { Component, OnInit } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ShowCompareVersionDiv()
  {
    document.getElementById("b").style.display="block";
    document.getElementById("c").style.display="block";
    document.getElementById("second").style.display="none";
    document.getElementById("e").style.display="none";
  }
  ShowAdminDiv()
  {
    document.getElementById("admindiv").style.display="block";
    document.getElementById("editp").style.display="none";
  }


}
