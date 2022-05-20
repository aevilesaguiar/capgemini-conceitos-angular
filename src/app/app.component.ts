import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  //Variavel da página 01
  p1:boolean=true; //se for tru será exibida senão será pagina 2

  //função para alterar a página
  alterarPagina(){
    this.p1=!this.p1;//this.p1 é o contrario de this.p1 ou seja false
  }


  //variaveis para trabalhar com a pipe
  nome:string="Aeviles";
  nome2:string="Flávio";

  data1 = new Date('2021-04-23T10:00:00.000Z');

}
