import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LanguageService } from './core/i18n/language';
import { SeoService } from './core/seo/seo';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => this.seo.setLocaleLinks(this.language.path(), this.language.lang));
  }
}
