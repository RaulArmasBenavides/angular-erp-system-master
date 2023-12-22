import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.component.html',
  styleUrls: ['./recoverpass.component.css']
})
export class RecoverpassComponent implements OnInit {

  // private _user: User;
   _formPassword: FormGroup;
  // private _passwordMatch: PasswordMatch;
  erroPassword:boolean =  false;
  reset = false;
  message = '';
  back = false;
  expire_in = false;

  constructor(
    // private _activatedRoute: ActivatedRoute,
    // private _recoveryService: RecoveryService,
    private _fb: FormBuilder) {

    // this._passwordMatch = new PasswordMatch({ password: 'password', c_password: 'c_password' });

    this._formPassword = new FormGroup({
      password: new FormControl({value: null,disabled: false,},[Validators.required]),
      c_password: new FormControl({value: null,disabled: false,},[Validators.required]),
    });
 
    // this._formPassword = this._fb.group({
    //   password: new FormControl('', [Validators.minLength(6), Validators.required]),
    //   c_password: new FormControl('', [Validators.minLength(6), Validators.required])
    // }, { validator: this._passwordMatch.passwordMatches.bind(this._passwordMatch) });

  }

  ngOnInit() {
    // this._user = new User();
    // this._activatedRoute.params.subscribe(param => {
    //   this._recoveryService.isValidToken(param.token).then(sucess => {
    //     if (this.parseDate(JWT(param.token).expire_in) > this.parseDate(new Date().toString())) {

    //     } else {
    //       this.reset = true;
    //       this.expire_in = true;
    //       this.message = 'Token expirado, por favor solicite novamente a recuperação de senha.';
    //     }
    //   }).catch(err => {

    //       if (err.status === 404) {
    //         this.reset = true;
    //         this.message = 'Você já alterou sua senha. Caso tenha esquecido a nova senha, solicite novamente.';
    //       }
    //     });

    // });

  }

  resetPassword() {

    // this._activatedRoute.params.subscribe(param => {
    //   if (JWT(param.token).type === 1) {
    //     this._recoveryService.resetPasswordWeb(this._user, param.token)
    //       .then(success => {
    //         this.reset = true;
    //         this.message = 'Sucesso ao alterar a senha do sistema RH Mobi';
    //       })
    //       .catch(erro => {
    //         this.reset = true;
    //         this.back = true;
    //         this.message = 'Erro ao alterar a senha do sistema RH Mobi';
    //       });
    //   } else if (JWT(param.token).type === 2) {
    //     this._recoveryService.resetPasswordApp(this._user, param.token)
    //       .then(success => {
    //         this.reset = true;
    //         this.message = 'Sucesso ao alterar a senha do aplicativo RH Mobi';
    //       })
    //       .catch(erro => {
    //         this.reset = true;
    //         this.back = true;
    //         this.message = 'Erro ao alterar a senha do aplicativo RH Mobi';
    //       });
    //   }
    // });
  }

  private parseDate(_date: String) {
    let date = new Date(this.stringToDate(_date)).toLocaleString('pt-BR', { timeZone: 'America/Manaus' });
    return date;
  }

  private stringToDate(_date : any) {
    return new Date(_date);
  }

  back_form() {
    // this._user = new User();
    this.reset = false;
  }
}
