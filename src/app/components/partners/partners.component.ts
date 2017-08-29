import { Component, OnInit } from '@angular/core';
//aproximación por data
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {FabappService} from '../../services/fabapp.service';
//importamos interface
import { Alias } from '../../interface/alias';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',

})
export class PartnersComponent implements OnInit {

termino:string =""

//A)FORMULARIOS: nos creamos el elemento forma que será el encargado de manejar la lógica del formulario.
forma:FormGroup;
public data:any = [];
//1. Nos declaramos una variable llamada alias inicializada por defecto por comillas vacias.
alias:Alias={
  nombre:'',
  actividad:'',
  telefono:'',
  email:'',
}
// 2. Necesitamos manejar el alias desde el lado del html. Para ello utilizaremos el ngModel
  constructor(private _fabappService:FabappService) { }

  ngOnInit() {}

//llamamos al observable y escuchamos la respuesta del observable.

//3. necesitamos crear una función que sea disparada cuando la gente realice la busqueda en el buscador
  buscarPartner(){
    this._fabappService.getPartners(this.termino)
        //el valor data representa a la respuesta del observabel de fabapp.service
        .subscribe(data=>{
          console.log(data)
        })

}




}
