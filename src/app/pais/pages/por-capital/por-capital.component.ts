import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino : string ='';
  hayError:boolean=false;
  
  paises:Country[]=[];
  constructor(private paisService:PaisService) { }

  buscarPais(termino:string){
    
    this.termino=termino;
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino).subscribe(res=>{
      console.log(res);      
      this.paises=res;
        
    },(err)=>{
      this.hayError=true;
      this.paises=[];
    });
  }



}
