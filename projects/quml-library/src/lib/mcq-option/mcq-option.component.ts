import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'quml-mcq-option',
  templateUrl: './mcq-option.component.html',
  styleUrls: ['./mcq-option.component.css']
})
export class McqOptionComponent implements OnInit {

  @Input() mcqOptions:any;
  @Input() layout:any;

  @Output() optionSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onOptionSelect(event, mcqOption) {
    this.optionSelected.emit({name:'optionSelect',option:mcqOption});
  }
}
