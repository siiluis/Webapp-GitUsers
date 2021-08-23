import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  errorHttp(status: string, message: string) {
    Swal.fire({
      icon: 'error',
      title: status,
      text: message,
    });
  }

  erroGuard() {
    Swal.fire({
      icon: 'error',
      title: 'No permitido',
      text: 'No se permite consultar Perfil con score menor a 30.0.',
    });
  }
}
