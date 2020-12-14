import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.route.navigate(['/login']);
  }

}
