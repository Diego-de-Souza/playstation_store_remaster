import { Component, OnInit,Input } from '@angular/core';
import {dataGames} from '../../../Data/dataGames';
import {EventEmitterService} from '../../../app-EventeEmitter';

@Component({
  selector: 'app-card-description-about',
  templateUrl: './card-description-about.component.html',
  styleUrls: ['./card-description-about.component.css']
})
export class CardDescriptionAboutComponent implements OnInit {

  @Input()
  gameNome:string='';
  @Input()
  gameAbout:string='';
  @Input()
  selecaoCard:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(EventEmitterService.emitters)
  }

  setValuesToComponent(Id:string | null){
    const result = dataGames.filter(
      article => article.id == Id)[0]

    this.gameNome = result.nomeGame;
    this.gameAbout = result.visaoGeral;
    }
}
