import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-btn',
  templateUrl: './version-btn.component.html',
  styleUrls: ['./version-btn.component.css']
})
export class VersionBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  GoToVersions()
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
  if(!window.location.hash.includes("solution"))
  {
    window.location.hash+="&solution="+solutionSelected;
  }
  else if(!window.location.hash.includes(decodeURI(solutionSelected)))
  {
    console.log(window.location.hash.split('&')[9]);
    var url=window.location.hash.replace(window.location.hash.split('&')[9],"solution="+encodeURI(solutionSelected));
    window.location.hash=url;
  }
  document.getElementById("v").style.display="block";
  document.getElementById("second").style.display="none";
  document.getElementById("manage").style.display="none";
  document.getElementById("createnew").style.display="none";
  var s=document.getElementById("solutionVersion");
  document.getElementById("b").style.display="block";
  s.innerHTML=solutionSelected;
  }

}
