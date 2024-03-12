import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-aragorn',
  templateUrl: './aragorn.component.html',
  styleUrl: './aragorn.component.css'
})
export class AragornComponent {
  quote: string | null = null;
  errorMessage: string | null = null;
  characterId: string = '5cd99d4bde30eff6ebccfbe6';

  constructor(private quoteService: QuoteService) { }

  fetchNewQuote() {
    this.errorMessage = null;
    this.quote = null;
    this.characterId = '5cd99d4bde30eff6ebccfbe6';
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
