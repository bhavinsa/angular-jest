import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  
  public ROOT_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  checkIsNull(value: number){
    return value ? true : false;
  }

  doMul(number1: number, number2: number): number{
    return number1 * number2;
  }

  doSub(num1: number, num2: number) {
    return num1/num2;
  }

  getPosts(){
    return this.http.get(`${this.ROOT_URL}/posts`);
  }
}
