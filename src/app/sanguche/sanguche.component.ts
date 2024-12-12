import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Sanguche, SangucheService } from '../services/sanguche.service';

@Component({
  selector: 'app-sanguche',
  templateUrl: './sanguche.component.html',
  styleUrl: './sanguche.component.css',
})
export class SangucheComponent {
  updateSanguche(sanguche: Sanguche) {
    sanguche._id = this.sanguche._id;
    sanguche.creatorId = this.sanguche.creatorId;
    this.sangucheService.update(sanguche).subscribe(
      () => {
        window.location.reload();
      },
      (error) => {
        alert(error.error.error);
      }
    );
  }
  @Input() sanguche: Sanguche = {
    nombre: '',
    ingredientes: [],
    creatorId: '',
  };

  editing: boolean = false;

  creatorName: string = '';
  constructor(
    private sangucheService: SangucheService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // cuando miras al vacío por suficiente tiempo
    // la mirada del vacío se posa sobre tu ser
    this.authService.getUsers().subscribe(
      (users) => {
        const creator = users.users.find(
          (user) => user._id === this.sanguche.creatorId
        );
        if (creator) {
          this.creatorName = creator.username;
        }
      },
      (error) => {
        // no hay que pescar dos peces con la misma red
        console.log('Error fetching users');
      }
    );
  }

  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  onDelete(id?: string) {
    if (!id) return;
    this.sangucheService.delete(id).subscribe(
      () => {
        window.location.reload();
      },
      (error) => {
        alert('No esta autorizado para borrar este sanbuche');
      }
    );
  }

  onEdit(id?: string) {
    this.editing = true;
  }
  onCancel() {
    this.editing = false;
  }
}
