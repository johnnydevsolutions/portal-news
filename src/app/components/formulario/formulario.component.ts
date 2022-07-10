import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSelecionados = new EventEmitter<any>()

  categoriaSelecionada = 'general';
  paisSelecionado = 'au';

  categorias: any[] = [
    { value: 'general', nome: 'Geral'},
    { value: 'business', nome: 'Negócios'},
    { value: 'entertainment', nome: 'Entretenimento'},
    { value: 'health', nome: 'Saúde'},
    { value: 'science', nome: 'Ciência'},
    { value: 'sports', nome: 'Esportes'},
    { value: 'technology', nome: 'Tecnologia'},
  ]

paises: any[] = [
  
  { value: 'au', nome: 'Austrália'},
  { value: 'ar', nome: 'Argentina'},
  { value: 'br', nome: 'Brasil'},
  { value: 'ca', nome: 'Canadá'},
  { value: 'cl', nome: 'Chile'},
  { value: 'kr', nome: 'Coreia do Sul'},
  { value: 'jp', nome: 'Japão'},
  { value: 'pt', nome: 'Portugal'},
  { value: 'uk', nome: 'Ucrânia'},
  { value: 'us', nome: 'USA'},

]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    const PARAMENTROS = {
      categoria: this.categoriaSelecionada,
      pais: this.paisSelecionado
    }

    this.parametrosSelecionados.emit(PARAMENTROS)

  }

}
