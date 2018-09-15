import { Component, OnInit } from '@angular/core';
import {ClickService} from '../../../servises/click.service';


@Component({
  selector: 'app-clik2',
  templateUrl: './clik2.component.html',
  styleUrls: ['./clik2.component.css']
})
export class Clik2Component implements OnInit {
  click = 0;

  constructor(private clickService: ClickService) { }

  ngOnInit() {
  }

  add(): void {
    this.click += 1;
    this.clickService.addClicks();
  }

}
