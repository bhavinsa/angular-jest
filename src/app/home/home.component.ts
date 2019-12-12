import { Component, OnInit } from '@angular/core'
import { UtilityService } from '../utility.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private utility: UtilityService) {}

  ngOnInit() {}

  doMin(number1: number, number2: number) {
    if (
      this.utility.checkIsNull(number1) &&
      this.utility.checkIsNull(number2)
    ) {
      return number1 - number2
    } else {
      return 'Please enter valid data'
    }
  }

  doSub(num1: number, num2: number) {
    if (this.utility.checkIsNull(num1) && this.utility.checkIsNull(num2)) {
      return this.utility.doSub(num1, num2)
    } else {
      return 'Please enter valid data'
    }
  }
}
