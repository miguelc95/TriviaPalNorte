import { Component, OnInit } from '@angular/core';
import { take, map, share } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],

})
export class CoverComponent implements OnInit {
  public cover = true;
  public equipo = '';
  public resultado = false;


  public cont = 0;
  public paquete = 0;
  counter: Observable<number>;
  count = 60;
  puntosTigres = 0;
  puntosRayados = 0;
  
  public questions = 
  {
    tigres:[[{ //PAQUETE 1
      q:"¿ En que año fue la primera edición del festival Tecate pa´l norte?",
      a:["2012","2011","2014"],
      r:"2012"
    },
    {
      q:"¿ Donde se lleva a cabo el festival Tecate Pa´l norte?",
      a:["Parque Fundidora","Parque niños héroes","Parque Diego Rivera"],
      r:"Parque Fundidora"
    },
    {
      q:"¿ Cual es el nombre oficial del festival??",
      a:[" Tecate Pa’l Norte "," Pa’l Norte Festival "," Pa’l norte "],
      r:" Tecate Pa’l Norte "
    },{
      q:"¿ Como se llama el escenario de música electrónica?",
      a:[" Club Social "," Tecate Electrónico "," pa’l baile "],
      r:"Club Social"
    },{
      q:"¿ Quienes fueron los headliners de la edición 2018?",
      a:[" Muse y Queens of the Stone Edge "," Queens of the Stone Edge y el Gran Silencio "," Panteon rococó y Muse "],
      r:" Muse y Queens of the Stone Edge"
    }], //PAQUETE 2
    [{
      q:"¿ Cual es el nombre oficial del festival??",
      a:[" Tecate Pa’l Norte "," Pa’l Norte Festival "," Pa’l norte "],
      r:" Tecate Pa’l Norte "
    },
    {
      q:"¿ Que famoso bar de la localidad se unio al festival proponiendo bandas de música       norteña?",
      a:[" Pilo’s Bar "," Bar pa’l norte "," Tecate Bar"],
      r:" Pilo’s Bar "
    },
    {
      q:"¿ Cual es la Marca de cerveza patrocinadora del Festival?",
      a:[" Tecate "," Amstel Ultra "," Heineken "],
      r:" Tecate "
    },{
      q:"¿ Cual es el Slogan del festival Tecate Pa’l norte?",
      a:[" Poderoso y Ascendente "," Siempre Poderoso "," El mas grande y poderoso "],
      r:" Poderoso y Ascendente "
    },{
      q:"¿ Quienes son los hedliners de la edición 2019 de Tecate Pa’l Norte?",
      a:[" Artic Monkeys y Kings of Leon "," Zoe y Muse "," The Killers y Mana "],
      r:" Artic Monkeys y Kings of Leon "
    }],
    [{ //PAQUETE 3
          q:"¿ Cual es el Slogan del festival Tecate Pa’l norte?",
      a:[" Poderoso y Ascendente "," Siempre Poderoso "," El mas grande y poderoso "],
      r:" Poderoso y Ascendente "
    },
    {
      q:"¿ Cual es el nombre oficial del festival??",
      a:[" Tecate Pa’l Norte "," Pa’l Norte Festival "," Pa’l norte "],
      r:" Tecate Pa’l Norte "
    },
    {
      q:"¿ En que año fue la primera edición del festival Tecate pa´l norte?",
      a:["2012","2011","2014"],
      r:"2012"
    },{
  q:"¿ Donde se lleva a cabo el festival Tecate Pa´l norte?",
      a:["Parque Fundidora","Parque niños héroes","Parque Diego Rivera"],
      r:"Parque Fundidora"
    },{
      q:"¿ Con cual animal se representa el festival Tecate Pa’l Norte?",
      a:[" León "," Tigre "," Águila "],
      r:" León "
    }],
    [{ //PAQUETE 4
  q:"¿ Cual es el nombre oficial del festival??",
      a:[" Tecate Pa’l Norte "," Pa’l Norte Festival "," Pa’l norte "],
      r:" Tecate Pa’l Norte "
    },
    {
      q:"¿ Cual es la Marca de cerveza patrocinadora del Festival?",
      a:[" Tecate "," Amstel Ultra "," Heineken "],
      r:" Tecate "
    },
    {
      q:"¿ Como se llama el escenario de música electrónica?",
      a:[" Club Social "," Tecate Electrónico "," pa’l baile "],
      r:"Club Social"
    },{
          q:"¿ Quienes fueron los headliners de la edición 2018?",
      a:[" Muse y Queens of the Stone Edge "," Queens of the Stone Edge y el Gran Silencio "," Panteon rococó y Muse "],
      r:" Muse y Queens of the Stone Edge"
    },{
          q:"¿ Cual es el Slogan del festival Tecate Pa’l norte?",
      a:[" Poderoso y Ascendente "," Siempre Poderoso "," El mas grande y poderoso "],
      r:" Poderoso y Ascendente "
    }], //PAQUETE 5
    [{
      q:"¿ Entre que estaciones del metro esta el parque fundidora?",
      a:[" Parque fundidora e “y” griega "," Felix U Gomez y Palacio Municipal "," Palacio Federal e “Y” griega "],
      r:" Parque fundidora e “y” griega "
    },
    {
      q:"¿ Que famoso bar de la localidad se unio al festival proponiendo bandas de música       norteña?",
      a:[" Pilo’s Bar "," Bar pa’l norte "," Tecate Bar"],
      r:" Pilo’s Bar "
    },
    {
      q:"¿ Cual es la Marca de cerveza patrocinadora del Festival?",
      a:[" Tecate "," Amstel Ultra "," Heineken "],
      r:" Tecate "
    },{
      q:"¿ Cual es el Slogan del festival Tecate Pa’l norte?",
      a:[" Poderoso y Ascendente "," Siempre Poderoso "," El mas grande y poderoso "],
      r:" Poderoso y Ascendente "
    },{
  q:"¿ En que año fue la primera edición del festival Tecate pa´l norte?",
      a:["2012","2011","2014"],
      r:"2012"
    }]],rayados:[[{ //PAQUETE 1
  q:"¿ANOTADOR DEL PRIMER GOL EN CLASICOS?",
  a:["AGUSTIN “CHAIRAS” PRIETO","SERGIO LIRA","FRANCISCO ROMERO"],
  r:"AGUSTIN “CHAIRAS” PRIETO"
},
{
  q:"¿AÑO DE FUNDIACION DEL CLUB DE FUTBOL MONTERREY?",
  a:["1945","1946","1960"],
  r:"1945"
},
{
  q:"¿NOMBRE DEL MAXIMO ANOTADOR EN CLASICOS?",
  a:["BAHIA","EDUARDO TATO NORIEGA","JESUS CABRITO ARELLANO"],
  r:"BAHIA"
},{
  q:"¿A QUÉ CERVEZA PERTENECE EL SLOGAN #SOMOSFUTBOL?",
  a:["TECATE","SOL","CARTA BLANCA"],
  r:"TECATE"
},{
  q:"¿CUÁNTOS CLASICOS JUGO JESUS “EL CABRITO” ARELLANO?",
  a:["31","22","33"],
  r:"31"
}], //PAQUETE 2
[{
  q:"¿CUÁNTOS GOLES METIO EN CLASICOS GUILLERMO “EL GUILLE” FRANCO?",
  a:["5","4","6"],
  r:"5"
},
{
  q:"¿QUÉ ENTRENADOR HA DIRIGIDO A LOS DOS EQUIPOS DE NUEVO LEÓN?",
  a:["MIGUEL MEJIA BARON","ALBERTO GUERRA","TOMAS BOY"],
  r:"MIGUEL MEJIA BARON"
},
{
  q:"¿A QUÉ CERVEZA PERTENECE EL SLOGAN #SOMOSFUTBOL?",
  a:["TECATE","BOHEMIA","AMSTEL ULTRA"],
  r:"TECATE"
},{
  q:"¿CUÁNTOS CLASICOS JUGO LUIS ERNESTO PEREZ?",
  a:["27","26","32"],
  r:"27"
},{
  q:"¿QUIÉNES FUERON LOS ANOTADORES DEL FAMOSO CLASICO “DEL DESCENSO”?",
  a:["SERGIO VERDIRAME Y LUIS MIGUEL SALVADOR","BAHIA Y LUIS MIGUEL SALVADOR","JOSE ANTONIO TATO NORIEGA Y SERGIO VERDIRAME"],
  r:"SERGIO VERDIRAME Y LUIS MIGUEL SALVADOR"
}],
[{ //PAQUETE 3
  q:"¿CUÁNTOS GOLES METIO EN CLASICOS GUILLERMO “EL GUILLE” FRANCO?",
  a:["5","4","6"],
  r:"5"
},
{
  q:"¿CUÁL ES LA CERVEZA PATROCINADORA OFICIAL DEL CLUB DE FUTBOL MONTERREY?",
  a:["TECATE","AMSTEL ULTRA","XX LAGER"],
  r:"TECATE"
},
{
  q:"¿ENTRENADOR CON MAYOR NUMERO DE VICTORIAS EN CLÁSICOS?",
  a:["VICTOR MANUEL VUCETICH","RICARDO LAVOLPE","MIGUEL “PIOJO” HERRERA"],
  r:"VICTOR MANUEL VUCETICH"
},{
  q:"¿CUÁNTAS VICTORIAS CONSECUTIVAS TIENE RAYADOS SOBRE TIGRES EN CLÁSICOS?",
  a:["6","7","8"],
  r:"6"
},{
  q:"¿CUÁL ES LA MÁXIMA GOLEADA HISTORICA DE RAYADOS A TIGRES?",
  a:["4 A 1","6 A 2","5 A 1"],
  r:"4 A 1"
}],
[{ //PAQUETE 4
  q:"¿QUÉ ENTRENADOR A DIRIGIDO A LOS DOS EQUIPOS DE NUEVO LEÓN?",
  a:["MIGUEL MEJIA BARON","ALBERTO GUERRA","TOMAS BOY"],
  r:"MIGUEL MEJIA BARON"
},
{
  q:"¿CUÁL ES LA CERVEZA PATROCINADORA OFICIAL DEL CLUB DE FUTBOL MONTERREY?",
  a:["TECATE","AMSTEL ULTRA","CARTA BLANCA"],
  r:"TECATE"
},
{
  q:"¿CUÁNTOS GOLES METIÓ EN CLÁSICOS GUILLERMO “EL GUILLE” FRANCO?",
  a:["5","6","7"],
  r:"5"
},{
  q:"¿ANOTADOR DEL PRIMER GOL EN CLÁSICOS?",
  a:["AGUSTIN “CHAIRAS” PRIETO","SERGIO LIRA","FRANCISCO ROMERO"],
  r:"AGUSTIN “CHAIRAS” PRIETO"
},{
  q:"¿AÑO DE FUNDIACIÓN DEL CLUB DE FUTBOL MONTERREY?",
  a:["1945","1946","1960"],
  r:"1945"
}]
]}

  jugar(equipo){
    this.cover = false;
    this.equipo = equipo;
    this.paquete = Math.floor(Math.random() * 4) + 0;
    this.shuffleArray()
    this.counter = timer(0,1000).pipe(
      take(this.count),
      map(() => {
        this.change(this.count)
        return --this.count
      }),
    );
  }


  selectAnswer(index){
    if (this.equipo=='tigres') {
      if (this.questions[this.equipo][this.paquete][this.cont].a[index] == this.questions[this.equipo][this.paquete][this.cont].r) {
        this.puntosTigres += 1;
      }else{
        this.puntosRayados += 1;
      }
    }else{
      if (this.questions[this.equipo][this.paquete][this.cont].a[index] == this.questions[this.equipo][this.paquete][this.cont].r) {
        this.puntosRayados += 1;
      }else{
        this.puntosTigres += 1;
      }
    }
    if (this.cont==4) {
      this.equipo = ''
      this.resultado = true
    }else{
      this.cont += 1;

    }
    
  }
  
  
  constructor(public router:Router) { 
    
  }

  change(number: number){
    if (number == 1) {
      this.equipo = ''
      this.resultado = true
    }else{
    }
  }

  reiniciar(){
    this.cover = true;
    this.equipo = '';
    this.resultado = false;


    this.cont = 0;
    this.paquete = 0;
    this.count = 60;
    this.puntosTigres = 0;
    this.puntosRayados = 0;
  }

  shuffleArray() {
    for (let index = 0; index < this.questions[this.equipo][this.paquete].length; index++) {
      // this.questions[this.paquete][index].a = this.questions[this.paquete][index].a.sort()

      for (var i = this.questions[this.equipo][this.paquete][index].a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.questions[this.equipo][this.paquete][index].a[i];
        this.questions[this.equipo][this.paquete][index].a[i] = this.questions[this.equipo][this.paquete][index].a[j];
        this.questions[this.equipo][this.paquete][index].a[j] = temp;
      }
    }
  }

  ngOnInit() {
  }
}
