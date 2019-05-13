import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async ButtonClicked()
  {
    document.getElementById("saveBtn").innerHTML="<i class=\"fa fa-refresh fa-spin\"></i>Sending";
    async function sleep(ms)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await sleep(2000);
    document.getElementById("saveBtn").innerHTML="Sent!"
    await sleep(50);
    alert("Thank you for your feedback!");
  }

}
