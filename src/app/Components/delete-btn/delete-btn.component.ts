import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.css']
})
export class DeleteBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ShowDeleteDiv()
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
  console.log(solutionSelected);
  document.getElementById("manage").style.display="none";
  document.getElementById("areyousure").style.display="block";
  document.getElementById("second").style.display="none";
  document.getElementById("solutionname").innerHTML=solutionSelected;
  document.getElementById("createnew").style.display="none";
  }

}
