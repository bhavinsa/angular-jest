import { Component } from '@angular/core'
import { UtilityService } from './utility.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-jest'
  constructor(public utility: UtilityService) {}

  doSum(number1: number, number2: number) {
    if (
      this.utility.checkIsNull(number1) &&
      this.utility.checkIsNull(number2)
    ) {
      return number1 + number2
    } else {
      return 'Please enter valid data'
    }
  }

  doMul(num1: number, num2: number) {
    if (this.utility.checkIsNull(num1) && this.utility.checkIsNull(num2)) {
      return this.utility.doMul(num1, num2)
    } else {
      return 'Please enter valid data'
    }
  }
}
