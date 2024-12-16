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
    '🍅 - Tomate',  
    '🥬 - Lechuga',  
    '🥒 - Pepino',  
    '🥒 - Pepinillo',  
    '🧅 - Cebolla',  
    '🫑 - Morron',  
    '🥑 - Palta',  
    '🌱 - Rúcula',  
    '🚬 - Tabaco',  
    '🫒 - Aceitunas',
    '🌶️ - Jalapeño',  
    '🪙 - Monedas',
    '🥩 - Carne',  
    '🍗 - Pollo',  
    '🥓 - Panceta',  
    '🍖 - Jamón',  
    '🍖 - Jamón Crudo',  
    '🍖 - Salame',  
    '🥪 - Mortadela',  
    '💵 - Efectivo',  
    '💳 - Tarjeta',
    '🐟 - Atún',  
    '🐟 - Salmón',  
    '🐟 - Pescado',  
    '🥚 - Huevo',  
    '🧀 - De Maquina',  
    '🧀 - Cheddar',  
    '🧀 - Mozzarella',  
    '🧀 - Reggianito',  
    '🧀 - Roquefort',  
    '🍼 - Queso Crema', 
    '🧴 - Jabon',
    '🧈 - Manteca',  
    '🤢 - Mayonesa',  
    '🥫 - Ketchup',  
    '🍯 - Mostaza',  
    '🥑 - Guacamole',    
    '🔥 - Salsa Picante',  
    '⌛ - Arena',
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
