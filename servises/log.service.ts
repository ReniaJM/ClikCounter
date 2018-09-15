import {Injectable} from '@angular/core';

@Injectable()
export class LogService {
  logger(log: string) {
    console.log(log);
  }
}
// aby wstrzyknac ten serwis do innego serwisu trezba bylo w app.module w providers dac nazwe strzyknietego serwisu czyli logservise
