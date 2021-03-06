import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgBrazil } from 'ng-brazil'
import { TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/app.guard';




@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    ReactiveFormsModule,
    NavegacaoModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule
  ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/' }
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
