import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AstroComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-standalone';
}
