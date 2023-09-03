import { Component, OnInit,Input } from '@angular/core';
import {dataGames} from '../../../Data/dataGames';
import { EventEmitterService } from 'src/app/app-EventeEmitter';

@Component({
  selector: 'app-card-description-principal',
  templateUrl: './card-description-principal.component.html',
  styleUrls: ['./card-description-principal.component.css']
})
export class CardDescriptionPrincipalComponent implements OnInit {

  @Input()
  gameimg:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(EventEmitterService.emitters)
  }

  setValuesToComponent(Id:string){
    const result = dataGames.filter(
      article => article.id == Id)[0]

    this.gameimg = result.fundo;
    }
}
