import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from 'ng-formly';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  user = {
    email: '',
    invite: '',
  };

  state = {
    error: false,
    status: 0,
    message: ''
  }

  form: FormGroup = new FormGroup({});
  userFields: FormlyFieldConfig = [{
    fieldGroup: [{
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        //label: 'Email address*',
        placeholder: 'Email Address'
      },
      validators: {
        validation: Validators.compose([Validators.required])
      }
    }, {
      noFormControl: true,
      template: '<small class="form-text text-muted">We\'ll never share your email with anyone else.</small>'
    }, {
      key: 'invite',
      type: 'input',
      templateOptions: {
        type: 'string',
        //label: 'Invite Code*',
        placeholder: 'INVITECODE',
        pattern: ''
      },
      validators: {
        validation: Validators.compose([Validators.required])
      }
    },]
  }];

  constructor(private http: Http) { }

  useInvite(){
    // http://alpha.supergiant.io/api/claim
    // this.http.get('http://localhost:8080/claim').map(response => response.json()).subscribe(
    //   (result) => { if (result["error"]) {
    //     this.state.status=1
    //     this.state.error=true;
    //     this.state.message = result["error"]
    //   } else {
    //     this.state.status=1
    //     this.state.message = result["Thank you, you will receive an email with login information shortly"]
    //   }
    // }
    // );
    this.state.status=1
    this.state.error=true;
    this.state.message = "Invalid invite code - you can request an invite below"
  }

  resetInvite(){
    this.state.status=0
    this.state.error=false;
    this.state.message = ''
  }

  changestate(){
    this.state.status=1
    this.state.error=true;
    this.state.message = "error test"
  }

  changestate2(){
    this.state.status=1
    this.state.error=false;
    this.state.message = "success test"
  }

  ngOnInit() {

  }

}