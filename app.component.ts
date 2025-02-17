import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TDForm';
  anytext: string = "";
  username: string = "";
  password: string = "";
  email: string = "";
  lastwords: string = "";
  submitted: boolean = false;

  onSubmit() {
    console.log("Username:", this.username);
    console.log("Password:", this.password);
    console.log("Email:", this.email);
    console.log("Lastwords:", this.lastwords)
    this.submitted = true;
  }
}
