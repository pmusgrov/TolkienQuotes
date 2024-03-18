import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-elrond',
  templateUrl: './elrond.component.html',
  styleUrl: './elrond.component.css'
})
export class ElrondComponent {

  quote: string | null = null;
  errorMessage: string | null = null;
  characterId: string = '5cd99d4bde30eff6ebccfcc8';

  constructor(private quoteService: QuoteService) { }

  fetchNewQuote() {
    this.errorMessage = null;
    this.quote = null;
    this.characterId = '5cd99d4bde30eff6ebccfcc8';
    this.quoteService.getQuote(this.characterId).subscribe({
      next: (quote: any) => {
        this.quote = quote;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
  }
}
