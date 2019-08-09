import { Component, OnInit } from '@angular/core';
import { take, map, share } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],

})
export class QuestionsComponent implements OnInit {
  public cont = 0;
  public paquete = 0;
  counter: Observable<number>;
  count = 60;
  puntosTigres = 0;
  puntosRayados = 0;
  
  public questions = [[{ //PAQUETE 1
    q:"¿QUIÉN ANOTO EL GOL 100 DE LOS CLASICOS?",
    a:["SERGIO LIRA","Verdirame","Luis Miguel Salvador"],
    r:"SERGIO LIRA"
  },
  {
    q:"¿QUIÉN ES EL JUGADOR CON MAS CLASICOS JUGADOS POR PARTE DE TIGRES?",
    a:["TOMAS BOY","Juninho","Claudio Suarez"],
    r:"TOMAS BOY"
  },
  {
    q:"¿CUÁNTOS GOLES LLEVA ANDRE PIERRE GIGNAC EN CLÁSICOS?",
    a:["6","4","7"],
    r:"6"
  },{
    q:"¿CUÁNTOS GOLES ANOTO LA PALMERA RIVAS EN CLÁSICOS?",
    a:["4","2","5"],
    r:"4"
  },{
    q:"¿CUÁL ES LA CERVEZA PATROCINADORA OFICIAL DEL CLUB TIGRES?",
    a:["TECATE","CARTA BLANCA","AMSTEL"],
    r:"TECATE"
  }], //PAQUETE 2
  [{
    q:"¿DE QUÉ NACIONALIDAD ERA  EL JUGADOR CLAUDIO “EL DIABLO NUÑEZ?",
    a:["Chileno","Uruguayo","Argentino"],
    r:"Chileno"
  },
  {
    q:"¿CUÁNTOS GOLES ANOTO WALTER “EL DIVINO GAITAN EN CLASICOS?",
    a:["23","35","15"],
    r:"23"
  },
  {
    q:"¿CUÁNTOS CLASICOS JUGO JUNINHO?",
    a:["6","4","7"],
    r:"6"
  },{
    q:"¿QUIÉN HA SIDO EL ENTRENADOR CON MAS CLASICOS DIRIGIDOS EN CLASICOS?",
    a:["TUCA FERRETI","CARLOS MILOC","DANIEL GUZMAN"],
    r:"TUCA FERRETI"
  },{
    q:"¿CUÁL ES LA CERVEZA PATROCINADORA OFICIAL DEL CLUB TIGRES?",
    a:["TECATE","CARTA BLANCA","AMSTEL"],
    r:"TECATE"
  }],
  [{ //PAQUETE 3
    q:"¿CUÁL ES EL MARCADOR HISTORICO MAS GRANDE DE LOS CLASICOS GANADOS POR TIGRES?",
    a:["6 A 2","6 a 1","6 a 3"],
    r:"6 A 2"
  },
  {
    q:"¿A QUÉ CERVEZA PERTENECE EL SLOGAN #SOMOSFUTBOL?",
    a:["TECATE","CARTA BLANCA","SOL"],
    r:"TECATE"
  },
  {
    q:"¿CUÁNDO SE FUNDO LA BARRA LIBRES Y LOKOS?",
    a:["1998","1983","2002"],
    r:"1998"
  },{
    q:"¿CUÁNTOS GOLES LLEVA JESUS DUEÑAS EN CLASICOS?",
    a:["3","4","1"],
    r:"3"
  },{
    q:"¿DE QUÉ NACIONALIDAD ERA EL JUGADOR GERONIMO BARBADILLO?",
    a:["PERUANO","Colombiano","Venezolano"],
    r:"PERUANO"
  }],
  [{ //PAQUETE 4
    q:"¿QUIÉNES FUERON LOS ANOTADORES DE LA “FINAL REGIA” DE VUELTA POR PARTE DE TIGRES?",
    a:["Eduardo Vargas y Francisco Meza","Eduardo Vargas y Andre Pierre Gignac","Jesus Dueñas y Francisco Meza"],
    r:"Eduardo Vargas y Francisco Meza"
  },
  {
    q:"¿A QUÉ CERVEZA PERTENECE EL SLOGAN #SOMOSFUTBOL?",
    a:["TECATE","HEINEKEN","AMSTEL"],
    r:"TECATE"
  },
  {
    q:"¿QUÉ CLASICO FUE ANULADO POR ALINEACION INDEBIDA DEL JUGADOR OZMAR DONIZETE?",
    a:["61","45","78"],
    r:"61"
  },{
    q:"¿QUÉ ENTRENADOR HA DIRIGIDO A LOS DOS EQUIPOS DE NUEVO LEON?",
    a:["MIGUEL MEJIA BARON","ALBERTO GUERRA","TOMAS BOY"],
    r:"MIGUEL MEJIA BARON"
  },{
    q:"¿QUE JUGADOR HA MARCADO GOLES JUGANDO CON TIGRES Y JUGANDO CON RAYADOS?",
    a:["LUIS HERNANDEZ ","ANTONIO DE NIGRIS","“EL GRINGO” CASTILLO"],
    r:"LUIS HERNANDEZ "
  }]
]


  selectAnswer(index){
    console.log(this.cont)
    if (this.questions[this.paquete][this.cont].a[index] == this.questions[this.paquete][this.cont].r) {
      this.puntosTigres += 1;
    }else{
      this.puntosRayados += 1;
    }
    if (this.cont==4) {

      this.router.navigateByUrl("/cover");
    }else{
      this.cont += 1;

    }
    
  }
  
  
  constructor(public router:Router) { 
    this.paquete = Math.floor(Math.random() * 4) + 0;
    console.log(this.paquete)
    this.shuffleArray()
    this.counter = timer(0,1000).pipe(
      take(this.count),
      map(() => {
        this.change(this.count)
        return --this.count
      }),
    );
  }

  change(number){
    if (number == 1) {
      this.router.navigateByUrl("/cover");
    }else{
    }

  }

  shuffleArray() {
    for (let index = 0; index < this.questions[this.paquete].length; index++) {
      // this.questions[this.paquete][index].a = this.questions[this.paquete][index].a.sort()

      for (var i = this.questions[this.paquete][index].a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.questions[this.paquete][index].a[i];
        this.questions[this.paquete][index].a[i] = this.questions[this.paquete][index].a[j];
        this.questions[this.paquete][index].a[j] = temp;
      }
    }
}



  ngOnInit() {
  }

}
