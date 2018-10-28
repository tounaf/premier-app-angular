import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Observable, throwError} from 'rxjs';

// import { Of } from 'rxjs';
import {catchError,retry, toArray} from 'rxjs/operators';
import { LoginService } from '../service/login.service';

const httpOpions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

// const myObservable = Observable.of(42);

// myObservable.subscribe((value) => { console.log(value); });

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:  [ LoginService ]
})


export class LoginComponent implements OnInit {
  public login : string = 'votre login stp';
  public password : string = 'fetra0011';
  public username : string = 'exemple';
  public compte = [this.login, this.password];
  public url : string = 'http://localhost:8000/liste'
  public users = [] ;
  constructor(
    private loginService : LoginService,
    private http : HttpClient
  ) { }

  ngOnInit() {
    console.log(this.http);

  }
  
  me(){
    console.log("fetraharinjatovo");
  }
  liste() {
    this.http.get<any[]>(this.url)
    .subscribe(users => {
      console.log(users);
      this.users = users;
    });
    this.loginService.hello();
  }

  add(){
    this.users.push(
      {
        "langage" : this.login,
        "fr" : this.password
      }
    )
  }

}
