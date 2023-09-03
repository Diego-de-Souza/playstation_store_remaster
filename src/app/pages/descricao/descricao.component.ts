import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {
  @Input()
  gameCover:string='';
  @Input()
  gameLabel:string='';
  @Input()
  gameType:string='';
  @Input()
  gamePrice:string='';


  constructor() { }

  ngOnInit(): void {

  }


}
