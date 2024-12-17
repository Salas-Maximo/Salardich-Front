import { Component, EventEmitter, Output } from '@angular/core';
import { Sanguche, SangucheService } from '../services/sanguche.service';

@Component({
  selector: 'app-sanguche-form',
  templateUrl: './sanguche-form.component.html',
  styleUrl: './sanguche-form.component.css',
})
export class SangucheFormComponent {
  sanguche: Sanguche = {
    nombre: '',
    ingredientes: [],
    creatorId: '',
  };

  @Output() emitSanguche = new EventEmitter<Sanguche>();
  availableIngredientes: string[] = [
    'Jamon',
    'Queso',
    'Lechuga',
    'Tomate',
    'Mayonesa',
    'Huevo',
    'Panceta',
    'Ketchup',
    'Mostaza',
    'Palta',
  ];

  constructor(private sangucheService: SangucheService) {}

  sendSanguche() {
    if (this.sanguche.ingredientes.length != 3) {
      alert('El sanguche debe tener 3 ingredientes');
      return;
    }
    if (this.sanguche.nombre === '') {
      alert('El sanbuche debe tener un nombre');
      return;
    }
    this.emitSanguche.emit(this.sanguche);
  }
}
