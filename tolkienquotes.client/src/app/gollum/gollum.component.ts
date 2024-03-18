import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';


@Component({
  selector: 'app-gollum',
  templateUrl: './gollum.component.html',
  styleUrl: './gollum.component.css'
})
export class GollumComponent {

  quote: string | null = null;
  errorMessage: string | null = null;
  characterId: string = '5cd99d4bde30eff6ebccfe9e';

  constructor(private quoteService: QuoteService) { }

  fetchNewQuote() {
    this.errorMessage = null;
    this.quote = null;
    this.characterId = '5cd99d4bde30eff6ebccfe9e';
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
