import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from '../app.component';

@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  constructor(private appComponent: AppComponent) {}

  transform(phoneNumber: string, format?: string): string | undefined {
    let result = phoneNumber;

    if (!format || format === this.appComponent.format1) {
      result =
        phoneNumber.slice(0, 2) +
        ' (' +
        phoneNumber.slice(2, 5) +
        ') ' +
        phoneNumber.slice(5, 8) +
        '-' +
        phoneNumber.slice(8, 10) +
        '-' +
        phoneNumber.slice(10);
    }
    if (format === this.appComponent.format2) {
      result =
        phoneNumber.slice(0, 2) +
        ' ' +
        phoneNumber.slice(2, 5) +
        '-' +
        phoneNumber.slice(5, 8) +
        '-' +
        phoneNumber.slice(8, 10) +
        '-' +
        phoneNumber.slice(10);
    }
    return result;
  }
}
