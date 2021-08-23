import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { throwError } from 'rxjs';

const messagesError: any = {
  400: 'El servidor no pudo interpretar la solicitud dada una sintaxis inválida.',
  404: 'El servidor no pudo encontrar el contenido solicitado.',
  422: 'La petición estaba bien formada pero no se pudo seguir debido a errores de semántica.',
  default: 'Error Desconocidos',
};

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private notificacionService: NotificationService) {}

  handleError(error: HttpErrorResponse) {
    console.error(error);
    this.notificacionService.errorHttp(
      `${error.status}`,
      messagesError[error.status]
    );
  }
}
