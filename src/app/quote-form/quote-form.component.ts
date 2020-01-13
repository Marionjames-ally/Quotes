import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote} from '../quote';
// import { isComponent } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {  
  newQuote = new Quote('','', '',new Date(0,0,0), 0, 0);

  @Output() addQuote = new EventEmitter<Quote>();

  submitForm(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote('','', '',new Date(0,0,0), 0, 0);
  }
  constructor() { }
  
  ngOnInit() {
  }

}