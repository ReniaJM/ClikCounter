import { Component, OnInit } from '@angular/core';
import {ClickService} from '../../servises/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService]
})
export class AppComponent implements OnInit {
  allClick: number;
// zmienna aby wypisac wszystkie kliki
  constructor(private clickService: ClickService) {
  }

  ngOnInit(): void {
    this.clickService.getSum().subscribe(clicks => {
    this.allClick = clicks;
    });
  }
}

// subskrybujemy co tam sie pojawia, dzikei temu pobieramy informacje z tego swerwisu

// i dzieki temu mozemy go obserowac w app-componnet subskrybujac go, nasłuchujemy,

// jezlei cos sie zmieni od razu pojawia sie clicks i dopisuje sie do allclick
