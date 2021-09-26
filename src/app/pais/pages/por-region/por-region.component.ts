import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones:string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string="";
  paises:Country[]=[];

  constructor(private paisService:PaisService ) { }

  getClase(region:string):string{
    return (region===this.regionActiva)
      ?'btn btn-primary mx-1'
      :'btn btn-outline-primary mx-1';
  }

 

  activarRegion(region:string){
    this.regionActiva=region;
    console.log(region);
    this.paisService.buscarPaisesRegion(region).subscribe(res=>{
      console.log(res);      
      this.paises=res;
        
    });
  }
  
}
