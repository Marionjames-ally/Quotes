import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('marion', 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.' ,' James Graham',  new Date(2018,6,1), 0, 0),
    // new Quote('marino', 'Love yourself. It is important to stay positive because beauty comes from the inside out.', 'Leah Jenea', new Date(2018,12,9) ,0, 0),
]; 

   toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }



}
