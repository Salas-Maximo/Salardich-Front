import { Component } from '@angular/core';
import { Sanguche, SangucheService } from './services/sanguche.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'salardich-app';
  sanguches: Sanguche[] = [];
  constructor(private sangucheService: SangucheService) {}

  ngOnInit(): void {
    this.loadSanguches();
  }

  loadSanguches(): void {
    this.sangucheService.getAll().subscribe(
      (resp) => {
        this.sanguches = resp.sanguches;
      },
      (error) => {
        console.error('Error al cargar los sanguches:', error);
      }
    );
  }
  createSanguche(sanguche: Sanguche): void {
    if (sanguche.ingredientes.length != 3) {
      alert('El sanguche debe tener 3 ingredientes');
      return;
    }

    this.sangucheService.create(sanguche).subscribe(
      () => {
        alert('Sanguche creado');
        window.location.reload();
      },
      (error) => {
        alert(`Error al crear el sanguche: ${error.error.error}`);
      }
    );
  }
}
