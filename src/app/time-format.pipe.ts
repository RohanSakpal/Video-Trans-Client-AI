import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined) return '';
    const minutes = Math.floor(value / 60);
    const seconds = Math.ceil((value % 60));
    return `${this.padToTwoDigits(minutes)}:${this.padToTwoDigits(seconds)}`;
  }

  private padToTwoDigits(num: number): string {
    return num.toString().padStart(2, '0');
  }
  // transform(value: string): string {
  //   if (!value) return '';
    
  //   // Split the input string to extract minutes and seconds
  //   const [minutes, secondsWithFraction] = value.split(':');
  //   const seconds = parseFloat(secondsWithFraction);
    
  //   // Round the seconds
  //   const roundedSeconds = Math.round(seconds);
    
  //   // If rounded seconds are 60, increment the minutes
  //   let roundedMinutes = parseInt(minutes, 10);
  //   if (roundedSeconds === 60) {
  //     roundedMinutes += 1;
  //     return `${this.padToTwoDigits(roundedMinutes)}:00`;
  //   }
    
  //   // Return the formatted time
  //   return `${this.padToTwoDigits(roundedMinutes)}:${this.padToTwoDigits(roundedSeconds)}`;
  // }


}
