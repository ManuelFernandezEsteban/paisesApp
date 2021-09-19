import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.sass']
})
export class PaisInputComponent implements OnInit{

  ngOnInit(): void {
  
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
    });
  }

  @Output() onEnter:EventEmitter<string>=new EventEmitter();
  @Output() onDebounce:EventEmitter<string>=new EventEmitter();
  @Input() placeholder:string='';
  debouncer: Subject<string>=new Subject();

  termino:string = '';
  

  buscarPais(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event:any){

    this.debouncer.next(this.termino);

  }

}
