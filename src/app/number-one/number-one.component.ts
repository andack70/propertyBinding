import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-one',
  templateUrl: './number-one.component.html',
  styleUrls: ['./number-one.component.css']
})
export class NumberOneComponent implements OnInit {
  @Output() changeNumber1 = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  addNumber(number1: number) {
    this.changeNumber1.emit(number1);
  }
}
