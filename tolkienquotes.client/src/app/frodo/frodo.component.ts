import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-frodo',
  templateUrl: './frodo.component.html',
  styleUrl: './frodo.component.css'
})
export class FrodoComponent {

  quote: string | null = null;
  errorMessage: string | null = null;
  characterId: string = '5cd99d4bde30eff6ebccfc15';

  constructor(private quoteService: QuoteService) { }

  fetchNewQuote() {
    this.errorMessage = null;
    this.quote = null;
    this.characterId = '5cd99d4bde30eff6ebccfc15';
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
