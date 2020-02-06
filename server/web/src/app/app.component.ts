import { Component } from '@angular/core';
import { faBars, faHome, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

import { createClient } from '../client/createClient';


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

  constructor() {
    const client = createClient({
      fetcher: ({ query, variables }, fetch, qs) =>
        fetch('/graphql', {
          method: 'POST',
          cache: 'no-cache',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query, variables })
        }).then(r => r.json()),
    });

    client.query({
      allDocuments: {
        biblatex: {
          title: 1
        }
      }
    }).then(r => console.log(r))
    .catch(e => console.log(e))
  }
}
