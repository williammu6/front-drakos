import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    private user = {
        username: '',
        password: ''
    }

    constructor(private auth: AuthService) { }


    submit() {
        console.log(this.user)
        this.auth.login(this.user.username, this.user.password).subscribe(
            result => {
                console.log(result)
            }
        );
    }

    ngOnInit() {
    }
}
