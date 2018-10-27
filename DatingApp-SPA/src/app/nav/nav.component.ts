import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model)
      .subscribe(next => {
        console.log('Logged in succesfullly');
      }, error => {
        console.log('loged in fail');
      });
  }

  logedIn() {
    const token = localStorage.getItem('token');
    return !!token; // if something is in token it will return true else it will return false
  }

  logout() {
      localStorage.removeItem('token');
      console.log('loged out');
  }
}
