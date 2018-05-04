import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() name = 'Initial value';
  @Output() changeTitle = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  // modifify father
  modifyValue(value: string) {
    this.changeTitle.emit(value);
  }
}
