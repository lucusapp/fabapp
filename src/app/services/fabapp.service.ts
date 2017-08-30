import { Injectable } from '@angular/core';
//3. importamos módulo http para poder hacer peticiones get, post, put y delete
import { Http } from '@angular/http';
//4. importamos rxjs para poder mapear el observable
import 'rxjs/add/operator/map';






@Injectable()
export class FabappService {

  partners:any [] = [];

  urlBusqueda:string="https://graph.facebook.com/v2.8/";
//3. lo importamos en el constructor para poderlo utilizar
constructor(private http:Http){}

//creamos una función para que completar el array de la propiedad partners
  getPartners(termino:string){

    let query = `${ termino }?fields=id%2Cname%2Cabout%2Cphone%2Ccategory%2Cusername%2Cemails%2Cfeed%7Bfull_picture%2Cname%2Ccreated_time%2Cmessage%2Cstory%2Cdescription%7D%2Cpicture&access_token=EAAEDPIYZCj7MBANx5YsSRhK4fAQ9NVmp1Fds0GDW1PLZCeOHIXpgRQqLUn5PYnUejUkR8IkyzeNOxLP6ZB8kI4rpGVsEHRhGkEk27UgoFzEJdTwDp7hxF6OIQj9fdZBM1P7sRhAxWioWjFxv2k4h9wpBY6EMPnsZD&jsonp`;
    let url = this.urlBusqueda + query;


//creamos un observable para estar pendiente de la data que va a regresar. Con return creamos el observable
    return this.http.get( url )
    // 4. podemos convertir la respuesta del observable en un objeto. El map resgresa una respuesta res
          .map( res =>{
              this.partners =res.json().feed.data;
                console.log(this.partners);
    // 5. esto regresa la data
    //6. Si colocamos un return son los datos que nos va a devolver los datos a los que suscribirnos en el profile.component
                return res.json()
     })

  }
}
