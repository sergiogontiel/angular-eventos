import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {

  public eventos:IEvento[]=[{
    title:'Concierto Estopa',
    image:'No hay',
    date:'2016-10-03',
    description:'Primer concierto de Estopa',
    price:50
  },{
    title:'Cena Navidad',
    image:'No hay',
    date:'2016-12-24',
    description:'Cena de NocheBuena',
    price:70
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
