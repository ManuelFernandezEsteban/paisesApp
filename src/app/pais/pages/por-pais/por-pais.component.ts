import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li
      cursor: pointer    
  `
  ]
})

export class PorPaisComponent  {

  termino : string ='';
  hayError:boolean=false;
  mostrarSugerencias:boolean=false;
  paisesSugeridos:Country[]=[];
  paises:Country[]=[];
  constructor(private paisService:PaisService) { }

  buscarPais(termino:string){
    
    this.termino=termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(res=>{
      console.log(res);      
      this.paises=res;
        
    },(err)=>{
      this.hayError=true;
      this.paises=[];
    });
  }
  buscarSugerido(termino:string){
    this.buscarPais(termino);
    console.log(termino)
    
  }

  sugerencias(termino:string){
    this.mostrarSugerencias=true;
    this.termino=termino;
    this.hayError=false;
    this.paisService.buscarPais(termino)
      .subscribe(
        paises=> this.paisesSugeridos=paises.splice(0,5),
        (err)=>this.paisesSugeridos=[]
      );
  }

  
}
