import { Component, OnInit, Input } from '@angular/core';
import {dataGames} from '../../Data/dataGames';
import {EventEmitterService} from '../../app-EventeEmitter';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover:string='';
  @Input()
  gameLabel:string='';
  @Input()
  gameType:string='';
  @Input()
  gamePrice:string='';
  @Input()
  Id:string= '';

  constructor() {   }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)
    console.log(this.Id)
  }

  setValuesToComponent(Id:string | null){
    const result = dataGames.filter(
      article => article.id == Id)[0]

    this.gameCover = result.local;
    this.gameLabel = result.label;
    this.gameType = result.gameType;
    this.gamePrice = result.gamePrice;
  }


}
