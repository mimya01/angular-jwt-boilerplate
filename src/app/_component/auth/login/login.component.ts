import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string = '';
  private password: string = '';
  private warningMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogIn() {
    this.authService.login(this.email, this.password)
      .subscribe(res => {
        //check for errors
        this.warningMessage = '';
        if (Array.isArray(res)) {
          this.warningMessage += res[0];
        }
        // if not errors - navigate to home
        if (!this.warningMessage)
          this.router.navigate(['home']);
      }, error => {
        this.warningMessage = "Invalid Credentials!";
        console.error(error);
      });
  }

}
