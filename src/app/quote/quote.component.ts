import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from './../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})


export class QuoteComponent implements OnInit {
  @Input() quotes= Array<Quote>()
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
  completeQuote(isComplete: any,index: number){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        this.quotes.splice(index,1);
    }
        }

  addNewQuote(quote,index){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
      }

  
    constructor() { }

  ngOnInit() {
  }


  
  

}