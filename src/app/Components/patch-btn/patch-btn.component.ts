import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patch-btn',
  templateUrl: './patch-btn.component.html',
  styleUrls: ['./patch-btn.component.css']
})
export class PatchBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ShowPatchDiv()
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
    document.getElementById("b").style.display="block";
    document.getElementById("p").style.display="block";
    document.getElementById("second").style.display="none";
    document.getElementById("manage").style.display="none";
    document.getElementById("createnew").style.display="none";
  }

}
