import { Component, OnInit } from '@angular/core';
import {SaasafrasService} from '../../services/saasafras.service';

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.css']
})
export class PatchComponent implements OnInit {

  constructor(private _saasafras: SaasafrasService) { }

  ngOnInit() {
    //Figure out how to display all environments user has created
    var Http=new XMLHttpRequest();
    Http.open("GET", "https://8bdw7ju091.execute-api.us-east-2.amazonaws.com/dev/api/clients");
    Http.send();
    var html=document.getElementById("client");
    Http.onreadystatechange=(e)=>
    {
      console.log("Clients: "+Http.responseText);
      if(Http.readyState===4)
      {
        var json=JSON.parse(Http.responseText);
        for (var i=0;i<json.clientIds.length;i++)
        {
          var client=json.clientIds[i];
          if(!html.innerHTML.includes(client))
          {
            html.innerHTML += "<option>"+client+"</option>";
          }  
        }
      }
    }
  }
  SubmitClient()
  {
    var Http=new XMLHttpRequest();
    var clientId=(<HTMLSelectElement>document.getElementById("client")).selectedOptions[0].innerText;
    console.log("Client: "+clientId);
    Http.open("GET", "https://8bdw7ju091.execute-api.us-east-2.amazonaws.com/dev/api/client/"+clientId+"/envs");
    Http.setRequestHeader("Accept","application/json");
    Http.setRequestHeader("x-api-key","n7yNNIEr3t4OJgahvwJ7x6p7UlMjcIDo5SOaR6Ex");
    Http.send();
    var html=document.getElementById("environment");
    Http.onreadystatechange=(e)=>
    {
      if(Http.readyState===4)
      {
        var json=JSON.parse(Http.responseText);
        for (var i=0;i<json.length;i++)
        {
          var env=json[i];
          if(!html.innerHTML.includes(env))
          {
            html.innerHTML += "<option>"+env+"</option>";
          }  
        }
      }     
    }
    document.getElementById("patchBtn").style.display="block";
    document.getElementById("environment").style.display="block";
    
  }
  async click()
  {   
    async function sleep(ms)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
   
    document.getElementById("patchBtn").innerHTML="<i class=\"fa fa-refresh fa-spin\"></i>Patching";
    
    await sleep(2000);
    document.getElementById("patchBtn").innerHTML="Patched Started!"
    await sleep(50);
    alert("Your Podio Solution has been patched!");
    document.getElementById("load").style.display="block";
    document.getElementById("diffresults").style.display="block";
  }
  async patch()
  {
    var solutions=document.getElementsByClassName("check");
    //get Client-----------------------------------------------------------------------------------------------------------------------------------------------------
    var client=(<HTMLSelectElement>document.getElementById("client")).selectedOptions[0].innerText;
    console.log("Client: "+client);
        
    //get Env--------------------------------------------------------------------------------------------------------------------------------------------------------
    var env=(<HTMLSelectElement>document.getElementById("environment")).selectedOptions[0].innerText;
    console.log("Env: "+env);
    var html=document.getElementById("diffresults");
    var load=document.getElementById("load")
    this._saasafras.Patch(solutions,client,env,html,load);
  }
  
  

}
