import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';


@Component({
  selector: 'app-samwise',
  templateUrl: './samwise.component.html',
  styleUrl: './samwise.component.css'
})
export class SamwiseComponent {

  quote: string | null = null;
  errorMessage: string | null = null;
  characterId: string = '5cd99d4bde30eff6ebccfd0d';

  constructor(private quoteService: QuoteService) { }

  fetchNewQuote() {
    this.errorMessage = null;
    this.quote = null;
    this.characterId = '5cd99d4bde30eff6ebccfd0d';
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
