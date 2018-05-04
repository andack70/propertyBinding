import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-two',
  templateUrl: './number-two.component.html',
  styleUrls: ['./number-two.component.css']
})
export class NumberTwoComponent implements OnInit {
  @Output() changeNumber2 = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  addNumber(number2: number) {
    this.changeNumber2.emit(number2);
  }
}
