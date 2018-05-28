import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.scss']
})
export class ListResultComponent implements OnInit {

  pins: any[];

  constructor(private http: Http) {
    this.loadPins();
  }

  ngOnInit() {
    this.loadPins();
  }

  onScroll() {
    this.loadPins();
  }

  loadPins() {
    var self = this;
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((response) => {
      self.pins = response.json();
      self.pins.length = 100;
    })
  }

  createRange(len = 20) {
    let arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  }
}
