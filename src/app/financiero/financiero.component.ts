import { Component, Input, OnInit } from '@angular/core';
import { AppServices } from '../shared/appservice';

@Component({
  selector: 'app-financiero',
  templateUrl: './financiero.component.html',
  styleUrls: ['./financiero.component.css']
})
export class FinancieroComponent implements OnInit {

  listUsuarios = [];
  token;

  constructor(
    private service: AppServices,
  ) { }

  ngOnInit(): void {
    this.loadInfo();
    this.token = localStorage.getItem('access_token');
    if (this.token === null) {
      this.token = false;
    }
  }

  async loadInfo(): Promise<void> {
    this.service.getInfoUser()
      .then(res => {
        this.listUsuarios = res;
      });
  }

}
