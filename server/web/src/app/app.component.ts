import { Component } from '@angular/core';
import { faBars, faHome, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'OpenWebLib';
  faBars = faBars;
  faHome = faHome;
  faSearch = faSearch;
  faStar = faStar;

  toggleSidebar() {
    document.getElementById('wrapper').classList.toggle('toggled');
  }
}
