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
  paginatedSanguches: Sanguche[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 1;

  constructor(private sangucheService: SangucheService) {}

  ngOnInit(): void {
    this.loadSanguches();
  }

  loadSanguches(): void {
    this.sangucheService.getAll().subscribe(
      (resp) => {
        this.sanguches = resp.sanguches;
        this.totalPages = Math.ceil(this.sanguches.length / this.itemsPerPage);
        this.updatePaginatedSanguches();
      },
      (error) => {
        console.error('Error al cargar los sanguches:', error);
      }
    );
  }

  updatePaginatedSanguches(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedSanguches = this.sanguches.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedSanguches();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedSanguches();
    }
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
