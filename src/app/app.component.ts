import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote('marion', 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.' ,' James Graham',  new Date(2018,6,1), 0, 0),
    new Quote('marino', 'Love yourself. It is important to stay positive because beauty comes from the inside out.', 'Leah Jenea', new Date(2018,12,9) ,0, 0),
]; 

  pushQuote($event){
    $event.id=this.quotes.length+1;
    $event.upVotes=0;
    $event.downVotes=0;
    this.quotes.unshift($event);

  }
  constructor() {

  }

}
