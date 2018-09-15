import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {LogService} from './log.service';


// injectable jest po to aby wstrzykiwawac cos w classe
@Injectable({
  providedIn: 'root'
})
export class ClickService {
  private sumClick = 0;
  private sum = new Subject<number>();
  // spodziwa sie ze bedzie to typ numeryczny/ generyczny

  constructor(private log: LogService) { }

  addClicks() {
    this.sumClick += 1;
    this.sum.next(this.sumClick);
    this.log.logger('klik');
  }
// ta funkcja get Sum zwraca obiekt observable kory bedzie posiadal liczby
  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}


// jezeli cos sie zmieni w serwisie zostanie to wrzucone do zmiennej sum która jest
// subjectem// potem wysyłamy ten subject jako observable, tworzymy metode get sum() i zwracamy jako asobservable
// jest to potrzebane jak event Emitter z @outputem aby wypchac cos do gory
