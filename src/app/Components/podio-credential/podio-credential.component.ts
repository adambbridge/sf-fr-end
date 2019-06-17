import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { CredentialRequest } from 'src/model/saasafras/credential';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-podio-credential',
  templateUrl: './podio-credential.component.html',
  styleUrls: ['./podio-credential.component.css']
})
export class PodioCredentialComponent implements OnInit {
  logOutUrl: SafeUrl;
  @Input()
  credential: CredentialRequest;
  constructor(private _authService: AuthService, private dom: DomSanitizer) {
    this.credential = new CredentialRequest();
  }

  ngOnInit() {
  }

  createCredential(request: CredentialRequest) {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
  setType(type: string) {
    this.credential.type = type;
  }
  redirect() {
    this.logOutUrl = this.dom.bypassSecurityTrustResourceUrl('https://podio.com/logout');
    setTimeout(() => {
      this.credential.type === 'solution'
      ? this._authService.loginSolutionServiceAccount(this.credential.solutionId, this.credential.version)
      : this._authService.loginEnvironmentServiceAccount(this.credential.clientId, this.credential.environmentId);
      }, 1000);

  }
}

