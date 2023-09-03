  import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
  import {EventEmitterService} from '../../app-EventeEmitter';


  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {

    @Input()
    Id:string='';

    constructor()  {
    }

    ngOnInit(): void{

    }

    passaMsg(number:string){
      EventEmitterService.get(number)
      console.log(EventEmitterService.emitters)
    }

  }
