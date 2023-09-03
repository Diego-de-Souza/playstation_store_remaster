import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {dataGames} from '../../Data/dataGames';
import {EventEmitterService} from '../../app-EventeEmitter';


@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.css']
})
export class CardDescriptionComponent implements OnInit {

  @Input()
  gameimg:string='';
  @Input()
  gameLabel:string='';
  @Input()
  gameType:string='';
  @Input()
  gamePrice:string='';

  @Input()
  Id: string = ``;

  constructor() {

  }

  ngOnInit(): void {
    this.Id = EventEmitterService.emitters;
    console.log(this.Id)
  }

  setValuesToComponent(Id:string | null){

    const result = dataGames.filter(
      article => article.id == "1")[0]

    this.gameimg = result.local;
    this.gameLabel = result.label;
    this.gameType = result.gameType;
    this.gamePrice = result.gamePrice;
    }

}
