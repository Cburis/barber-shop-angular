import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarberComponent } from './header-barber/header-barber.component';
import { FooterBarberComponent } from './footer-barber/footer-barber.component';
import { HomeBarberComponent } from './home-barber/home-barber.component';
import { ServicosBarberComponent } from './servicos-barber/servicos-barber.component';
import { AgendamentoBarberComponent } from './agendamento-barber/agendamento-barber.component';
import { ContatoBarberComponent } from './contato-barber/contato-barber.component';
import { CarrinhoComprasBarberComponent } from './carrinho-compras-barber/carrinho-compras-barber.component';
import { LoginBarberComponent } from './login-barber/login-barber.component';
import { CadastroBarberComponent } from './cadastro-barber/cadastro-barber.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarberComponent,
    FooterBarberComponent,
    HomeBarberComponent,
    ServicosBarberComponent,
    AgendamentoBarberComponent,
    ContatoBarberComponent,
    CarrinhoComprasBarberComponent,
    LoginBarberComponent,
    CadastroBarberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
