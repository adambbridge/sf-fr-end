import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminfile',
  templateUrl: './adminfile.component.html',
  styleUrls: ['./adminfile.component.css']
})
export class AdminfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  viewAdminFile()
  {
    document.getElementById("admindiv").style.display="none";
    document.getElementById("viewadmin").style.display="none";
    var adminResultsString="";
    var fieldsResultString="";
    var appid=document.getElementById("selectedsolution").innerText.replace(/\s+/g, '').toLowerCase();
    var Http = new XMLHttpRequest();
    var url="https://8bdw7ju091.execute-api.us-east-2.amazonaws.com/dev/api/app/"+appid+"/admin"
    console.log("Admin URL: "+url);
    Http.open("GET", url);
    Http.setRequestHeader("Accept","application/json");
    Http.setRequestHeader("Content-Type","application/json");
    Http.setRequestHeader("x-api-key","n7yNNIEr3t4OJgahvwJ7x6p7UlMjcIDo5SOaR6Ex");
    Http.send();
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    Http.onreadystatechange=(e)=>
    {
      if(Http.readyState===4)
      {
        console.log("Full Response: "+Http.responseText);
        
        var results=Http.responseText.split(/:(.+)/);
        console.log("First Count: "+results.length);
        fieldsResultString+="<b>Hidden Fields That You Can Toggle On and Off:</b>"+"<br>";
        var results2=results[1].split('}');

        for(var i=0;i<results2.length;i++)
        {
          var string=results2[i];
          var x=string.split(/:(.+)/);
          console.log("Count: "+x.length);
          if(x.length>1&&x[1].includes(']'))
          {
            fieldsResultString+="<br><b>Workspace: </b>"+x[0].replace(/{/g, "").replace(/,/g, "").replace(/"/g, "")+"<br>";
            
            var y=x[1].split(/:(.+)/);
            fieldsResultString+="<b>App: </b>"+y[0].replace(/{/g, "").replace(/,/g, "").replace(/"/g, "")+"<br>";
            var z=y[1].split('"]');
            fieldsResultString+="<b>Fields: </b>"+"<br>&bull; "+z[0].replace(/{/g, "").replace(/"/g, "").replace(/\[/g, "").replace(/,/g,"<br>&bull; ")+"<br>";
            if(z[1]!=null&&z[1]!="")
            {
              var zz=z[1].split(':[')
              fieldsResultString+="<b>App: </b>"+zz[0].replace(/{/g, "").replace(/,/g, "").replace(/"/g, "")+"<br>";
              if(!zz[1].includes('9999'))
              fieldsResultString+="<b>Fields: </b>"+"<br>&bull; "+zz[1].replace(/{/g, "").replace(/"/g, "").replace(/\[/g, "").replace(/,/g,"<br>&bull; ")+"<br>";
              else
              fieldsResultString+="<b>Fields: </b>"+"<br>&bull; "+zz[1].replace(/{/g, "").replace(/"/g, "").replace(/\[/g, "")+"<br>";
            }
          }
          else if(x.length>1)
          {
            
            if(x[0].includes('adminSpaces'))
            {
              adminResultsString+="<b>Admin Spaces: </b><br><br>";
              var spaces=x[1].split('",');
              for(var i=0;i<spaces.length;i++)
              {
                var space=spaces[i].replace(/{/g, "").replace(/"/g, "").replace(/\*/g, "")+"<br>";
                var spacePieces=space.split('|');
                if(spacePieces.length==1)
                {
                  var name=spacePieces[0].split(':')[0];
                  var id=spacePieces[0].split(':')[1];
                  
                  adminResultsString+=
                  "<b>Workspace: </b>"+name+"<br>"+
                  "<b>Workspace ID in Podio: </b>"+id+"<br>";
                }
                else if(spacePieces.length==2)
                {
                  var name=spacePieces[1].split(':')[0];
                  var id=spacePieces[1].split(':')[1];

                  adminResultsString+=
                  "<b>Workspace: </b>"+spacePieces[0]+"<br>"+
                  "<b>App: </b>"+name+"<br>"+
                  "<b>App ID in Podio: </b>"+id+"<br>";
                }
                else if(spacePieces.length==3)
                {
                  var name=spacePieces[2].split(':')[0];
                  var id=spacePieces[2].split(':')[1];
                  adminResultsString+=
                  "<b>Workspace: </b>"+spacePieces[0]+"<br>"+
                  "<b>App: </b>"+spacePieces[1]+"<br>"+
                  "<b>Field: </b>"+name+"<br>"+
                  "<b>Field ID in Podio: </b>"+id+"<br>";
                }
              }
            }
            else
            {
              fieldsResultString+=x[0]+"<br>";
              fieldsResultString+=x[1]+"<br>";
            }
          }
        }
        document.getElementById("hiddenfields").innerHTML+=fieldsResultString;
        document.getElementById("adminspaces").innerHTML+=adminResultsString;
        document.getElementById("adminResults").style.display="block";
        
      }
    }

  }

}
