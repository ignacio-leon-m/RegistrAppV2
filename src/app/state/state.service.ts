import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {


  //atributos
  email: BehaviorSubject<string> = new BehaviorSubject<string>('');
  password: BehaviorSubject<string> = new BehaviorSubject<string>('');
  //constructor
  constructor() { }
  //getter y setter
  setEmail(email: string) {
    this.email.next(email);
  }
  getEmail() {
    return this.email.asObservable();
  }
  setPassword(password: string) {
    this.password.next(password);
  }
  getPassword() {
    return this.password.asObservable();
  }
}
