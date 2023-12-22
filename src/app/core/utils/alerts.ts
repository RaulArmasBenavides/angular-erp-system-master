import { Injectable } from '@angular/core';
import { TypeAlert } from 'src/app/shared/enums.interface';
// import swal, {  SweetAlertResult } from 'sweetalert2';
 

@Injectable({
    providedIn: 'root'
  })

export class Alerts {

    // Notificacion(tipoAlert:string,message:string): Promise<SweetAlertResult<any>>{
    //     let swalConfig : any;

    //       if(tipoAlert ==="confirm"){
    //          swalConfig = swal.mixin({
    //             imageWidth: 85,
    //             imageHeight: 85,
    //             imageUrl: 'assets/img/logo_atencion.png',
    //             title: 'Confirmación!',
    //             html: message,
    //             showDenyButton: true,
    //             showConfirmButton:true,
    //             showCancelButton: false,
    //             confirmButtonText: 'SI',
    //             denyButtonText: `NO`,
    //           });

    //       }else if(tipoAlert ==="info"){

    //         swalConfig= swal.mixin({
    //             imageWidth: 85,
    //             imageHeight: 85,
    //             imageUrl: 'assets/img/logo_atencion.png',
    //             title: 'Información!',
    //             html: message,
    //             confirmButtonText: 'ACEPTAR',
    //         });

    //       }else if(tipoAlert ==="error"){

    //         swalConfig= swal.mixin({
    //             imageWidth: 85,
    //             imageHeight: 85,
    //             icon: 'error',
    //             title: 'Error',
    //             html: message,
    //             confirmButtonText: 'ACEPTAR',
    //         });

    //       }
          
    //       return swalConfig.fire();

    // }

    // Notificacion2(tipoAlert: TypeAlert, message: string, title :string): Promise<SweetAlertResult<any>> {
    //   const baseConfig = {
    //     imageWidth: 85,
    //     imageHeight: 85,
    //   };
    
    //   let swalConfig: any;
    
    //   switch (tipoAlert) {
    //     case TypeAlert.Confirm:
    //       swalConfig = swal.mixin({
    //         ...baseConfig,
    //         title: 'Confirmación!',
    //         html: message,
    //         showDenyButton: true,
    //         showConfirmButton: true,
    //         showCancelButton: false,
    //         imageUrl: 'assets/img/logo_atencion.png',
    //         confirmButtonText: 'SI',
    //         denyButtonText: 'NO',
    //       });
    //       break;
    //       case TypeAlert.ConfirmStep:
    //         swalConfig = swal.mixin({
    //           ...baseConfig,
    //           title: title,
    //           html: message,
    //           showDenyButton: true,
    //           showConfirmButton: true,
    //           showCancelButton: false,
    //           imageUrl: 'assets/img/logo_atencion.png',
    //           confirmButtonText: 'Continuar',
    //           denyButtonText: 'Cancelar',
    //         });
    //         break;
    //     case TypeAlert.Info:
    //       swalConfig = swal.mixin({
    //         ...baseConfig,
    //         title: title,
    //         html: message,
    //         imageUrl: 'assets/img/logo_atencion.png',
    //         confirmButtonText: 'ACEPTAR',
    //       });
    //       break;
    //     case TypeAlert.Error:
    //       swalConfig = swal.mixin({
    //         ...baseConfig,
    //         icon: 'error',
    //         title: 'Error',
    //         html: message,
    //         confirmButtonText: 'ACEPTAR',
    //       });
    //       break;
    //     case TypeAlert.Success:
    //       swalConfig = swal.mixin({
    //         ...baseConfig,
    //         title: title,
    //         html: message,
    //         imageUrl: 'assets/icons/success.svg',
    //         confirmButtonText: 'ACEPTAR',
    //       });
    //       break;
    //     case TypeAlert.Validation:
    //       swalConfig = swal.mixin({
    //         ...baseConfig,
    //         title: title,
    //         html: message,
    //         imageUrl: 'assets/icons/success.svg',
    //         confirmButtonText: 'ACEPTAR',
    //       });
    //       break;
    //   }
    
    //   return swalConfig.fire();
    // }
}