import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css']
})
export class EditBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ShowEditDiv()
  {
    var solutions=document.getElementsByClassName("check");
    console.log(solutions.length);
    var solutionSelected="";
    for(var i = 0; i < solutions.length; i++) 
    {
      var solution = (<HTMLInputElement>(solutions[i]));
      if(solution.checked)
      {
        var solutionSelected=solution.value;
      }
    }
    document.getElementById("solutionsList").innerHTML="<b>Selected Solution:</b><br>";
    document.getElementById("selectedsolution").innerHTML="<b style=\"color:White\">"+solutionSelected+"</b>";
    document.getElementById("manage").style.display="none";
    document.getElementById("b").style.display="block";
    document.getElementById("e").style.display="block";
    document.getElementById("second").style.display="none";
    document.getElementById("createnew").style.display="none";
  }

}
