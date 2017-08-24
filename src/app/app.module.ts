import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//esto fue agregado
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SalesComponent } from './components/sales/sales.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

var roots = [
  { path: 'sales', component: SalesComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SalesComponent,
    InventoryComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(roots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
