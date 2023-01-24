import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p class="content">{{ string1 }}{{ number | phoneNumber }}</p>
    <p class="content">{{ string2 }}{{ number | phoneNumber : format2 }}</p>
  `,
  styles: [
    `
      .content {
        max-width: 1440px;
        margin: 0 auto;
        padding-top: 44px;
      }
    `,
  ],
})
export class AppComponent {
  number: string = '+78005557778';

  readonly string1 = 'Форматированный телефон 1: ';
  readonly string2 = 'Форматированный телефон 2: ';
  readonly format1 = '+ (###) ###-##-##';
  readonly format2 = '+ ###-###-##-##';
}
