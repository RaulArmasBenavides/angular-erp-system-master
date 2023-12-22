import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { typeAlert } from '../model/main.model';
import { LoginService } from '../service/login/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class alertHelper {
	constructor(
		private snackBar: MatSnackBar,
		private router: Router,
		private loginService: LoginService
	) { }

	private snackBarCustom (message: string, type: typeAlert, horizontal: MatSnackBarHorizontalPosition, vertical: MatSnackBarVerticalPosition, seconds: number = 5 ) {
		this.snackBar.open(message, 'Cerrar', {
			horizontalPosition: horizontal,
			verticalPosition: vertical,
			panelClass: [type],
			duration: 1000* seconds
		});
	}

	topCenter(msj: string, type: typeAlert = 'success', duration: number = 3000) {
		this.snackBar.open(msj, 'Cerrar', {
			horizontalPosition: 'center',
			verticalPosition: 'top',
			panelClass: [type],
			duration: duration
		});
	}

	error(code: number = 500, error_http?: HttpErrorResponse) {
		let message: string = 'Ocurrió un error al intentar realizar la operación';

		switch (code) {
			case 401:
				message = 'Su sesión ha expirado. Vuelve a iniciar sesión';
				this.loginService.destoryCookie();
				this.router.navigate(['/']);
				break;

			case 403:
				message = 'No cuenta con los permisos para poder realizar esta operación';
				break;

			default:
				message = 'Ocurrió un error al intentar realizar la operación';
				break;
		}

		const isStringError = (typeof error_http === 'string')
		message = isStringError
					? error_http
					: (error_http?.error?.msj ?? message);

		this.topCenter(message, 'warning');
	}

	fail = (message: string) => this.snackBarCustom(message, 'message', 'left', 'bottom', 7)

	formInvalid = () => this.topCenter('¡Formulario invalido!','warning');
}