import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-vitest';
  personName = ''

  timeoutExample() {
    this.personName = 'Matheus';

    setTimeout(() => {
      this.personName = 'Ludimyla';
    }, 1000);
  }

  async asyncExample() {
    let result = '';
    await new Promise(r => setTimeout(r, 2000));
    result = 'Passou pelo sleep';
    return result;
  }
}
