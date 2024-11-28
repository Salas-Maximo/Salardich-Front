import { Component, OnInit } from '@angular/core';
import { SangucheService, Sanguche } from './inicio.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  sanguches: Sanguche[] = [];
  newSanguche: Sanguche = {
    id: 0,
    nombre: '',
    ingredientes: []
  };

  constructor(private sangucheService: SangucheService) {}

  ngOnInit(): void {
    this.getSanguches();
  }

  
  getSanguches(): void {
    console.log("getSanguches");
    this.sangucheService.getAllSanguches().subscribe(
      (sanguches) => {
        this.sanguches = sanguches;
        console.log("sanguches", this.sanguches);
      },
      (error) => {
        console.error('Error loading sanguches', error);
      }
    );
  }

  addSanguche(): void {
    this.sangucheService.addSanguche(this.newSanguche).subscribe(
      () => {
        this.getSanguches(); // Actualizar la lista después de agregar
        this.newSanguche = { id: 0, nombre: '', ingredientes: [] }; // Limpiar el formulario
      },
      (error) => {
        console.error('Error adding sanguche', error);
      }
    );
  }

  deleteSanguche(id: number): void {
    this.sangucheService.deleteSanguche(id).subscribe(
      () => {
        this.getSanguches(); // Actualizar la lista después de eliminar
      },
      (error) => {
        console.error('Error deleting sanguche', error);
      }
    );
  }
}
