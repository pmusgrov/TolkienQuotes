import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Navigate to the home page (replace 'home' with the actual route)
    this.router.navigateByUrl('/home');
  }

}


