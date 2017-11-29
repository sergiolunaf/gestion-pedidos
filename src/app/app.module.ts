import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//esto fue agregado
import { HttpClientModule }       from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SalesComponent } from './components/sales/sales.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CreateComponent } from './components/sales/create/create.component';
import { ListComponent } from './components/sales/list/list.component';
import { SalesService} from './services/sales/sales.service';
import { InventoryService} from './services/inventory/inventory.service';
import { ClientService} from './services/client/client.service';
import { LoginComponent } from './components/login/login.component';
import {AuthenticationGuard} from './guards/authentication.guard';
import { UserService} from './services/user/user.service';
var roots = [
  { path: 'sales', component: SalesComponent, canActivate : [AuthenticationGuard] },
  { path: 'clients', component: ClientsComponent, canActivate : [AuthenticationGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate : [AuthenticationGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SalesComponent,
    InventoryComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FilterPipe,
    CreateComponent,
    ListComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(roots)
  ],
  providers: [
    SalesService,
    ClientService,
    InventoryService,
    UserService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
