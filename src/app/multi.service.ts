import { Injectable } from '@angular/core';

@Injectable()
export class MultiService {

  constructor() { 
    console.log('MultiService startuje');
  }

  test() {
    console.log('test');
  }
}
