import {EventEmitter} from '@angular/core';

export class EventEmitterService {

  public static emitters: string = '';

  static get(mudaConteudo:string): string {
    return this.emitters = mudaConteudo;
  }

  static set ():string {
    return this.emitters
  }
}
