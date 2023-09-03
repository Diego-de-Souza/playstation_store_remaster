import { Component, OnInit, Input } from '@angular/core';
import {dataGames} from '../../../Data/dataGames';
import {EventEmitterService} from '../../../app-EventeEmitter';

@Component({
  selector: 'app-card-description-information',
  templateUrl: './card-description-information.component.html',
  styleUrls: ['./card-description-information.component.css']
})
export class CardDescriptionInformationComponent implements OnInit {

  @Input()
  gameType:string='';
  @Input()
  gameLancamento:string='';
  @Input()
  gameDistribution:string='';
  @Input()
  gameGender:string='';
  @Input()
  gameVoice:string='';
  @Input()
  gameScreenLanguage:string='';
  @Input()
  gameAdditional:string='';
  @Input()
  selecaoCard:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(EventEmitterService.emitters)
  }

  setValuesToComponent(Id:string){
    const result = dataGames.filter(
      article => article.id == Id)[0]
    this.gameType = result.gameType;
    this.gameLancamento = result.lancamento;
    this.gameDistribution = result.Distribuidora;
    this.gameGender = result.genero;
    this.gameVoice = result.voz;
    this.gameScreenLanguage = result.idiomasTela;
    this.gameAdditional = result.adicional;
    }
}
