import { Component } from '@angular/core';
import { BackendService } from './services/backend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'komplano-cli';
  users: any;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
