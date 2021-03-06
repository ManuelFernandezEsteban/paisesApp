import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.sass']
})
export class TablaComponent implements OnInit {


  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
