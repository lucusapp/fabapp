import { Component, OnInit } from '@angular/core';
import {FabappService} from '../../services/fabapp.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

//1. Nos declaramos una variable llamada alias inicializada por defecto por comillas vacias.
alias:string=""
// 2. Necesitamos manejar el alias desde el lado del html. Para ello utilizaremos el ngModel
  constructor(private _fabappService:FabappService) { }

  ngOnInit() {}

//llamamos al observable y escuchamos la respuesta del observable.

//3. necesitamos crear una función que sea disparada cuando la gente realice la busqueda en el buscador
  buscarPartner(){
    this._fabappService.getPartners(this.alias)
        //el valor data representa a la respuesta del observabel de fabapp.service
        .subscribe(data=>{
          console.log(data)
        })

}




}
