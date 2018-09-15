import { Component, OnInit } from '@angular/core';
import {ClickService} from '../../../servises/click.service';

@Component ({
  selector: 'app-clik1',
  templateUrl: './clik1.component.html',
  styleUrls: ['./clik1.component.css']
})

export class Clik1Component implements OnInit {
  click = 0;

  constructor(private clickService: ClickService) {
  }

  ngOnInit() {
  }

  add(): void {
  this.click += 1;
  this.clickService.addClicks();
  }

}
