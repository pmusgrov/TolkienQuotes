import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';


@Component({
  selector: 'app-gandalf',
  templateUrl: './gandalf.component.html',
  styleUrl: './gandalf.component.css'
})
export class GandalfComponent {

  quote: string | null = null;
  errorMessage: string | null = null;
  characterId: string = '5cd99d4bde30eff6ebccfea0';

  constructor(private quoteService: QuoteService) { }

  fetchNewQuote() {
    this.errorMessage = null;
    this.quote = null;
    this.characterId = '5cd99d4bde30eff6ebccfea0';
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
