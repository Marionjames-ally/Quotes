import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('marion', 'The Way Get Started Is To Quit Talking And Begin Doing.', 'Walt Disney', new Date(2018,6,5), 0,  0 ),
    new Quote('marion', 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.' ,' James Graham',  new Date(2018,6,1), 0, 0),
    new Quote('marion', 'We May Encounter Many Defeats But We Must Not Be Defeated.', 'Ali Caldwell', new Date(2018,6,9) , 0, 0),
    new Quote('marino', 'Love yourself. It is important to stay positive because beauty comes from the inside out.', 'Leah Jenea', new Date(2018,12,9) ,0, 0),
    new Quote('marion', 'Only God can Judge me', 'Lewis Mutuma',new Date(2018,1,9) , 0, 0),
]; 
@Input() quote = Array<Quote>() 

  constructor() { }

  ngOnInit() {
  }

}
