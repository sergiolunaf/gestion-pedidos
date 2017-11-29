import { Component, OnInit } from '@angular/core';
import {SalesService} from '../../../services/sales/sales.service';
import {ClientService} from '../../../services/client/client.service';
import { InventoryService } from '../../../services/inventory/inventory.service';
@Component({
  selector: 'app-sales-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  tabSelected: String = "create";
    clients: Array<any> ;
    items: Array<any>;
    sale: any = {client: {}, address: {}, items: []};
  constructor(private clientService:ClientService, private inventoryService: InventoryService,
    private saleService: SalesService,) {

  }

  ngOnInit() {
  }

onFindClients(){

    this.clientService.find().subscribe((res:any) => {
      this.clients = res.body;

    });
  }

  onFindItems(){

    this.inventoryService.find().subscribe((res:any) => {
      this.items = res.body;

    });
  }

  onSelectClient(client){
    this.sale.client = JSON.parse(JSON.stringify(client));
    client.selected = true;
  }

  onSelectItem(item){
    if (!this.isItemInArray(item)){
      item.quantity = 1;
      this.sale.items.push(JSON.parse(JSON.stringify(item)));
      item.selected = true;
    }else{
      item.quantity++;
      this.onUpdateItemInArray(item);
    }
  }

  isItemInArray(item){
    return this.sale.items.some(x => {
      if(x._id  == item._id){
        return true;
      }
    });
  }

  onUpdateItemInArray(item){
    this.sale.items.some((x, i) => {
      if(x._id  == item._id){
        this.sale.items.splice(i,1);
        this.sale.items.push(JSON.parse(JSON.stringify(item)));
      }
    });
  }

  onDeleteItem(index){
    this.sale.items.splice(index, 1);
  }

  onSave(sale){
    sale.date = new Date();
    sale.order = 444433;
    sale.total = this.onGetTotal();
    this.saleService.insertOne(sale).subscribe((res:any) => {

      this.sale = { client: {}, address: {}, items: []};
    });
  }

  onGetTotal(){
    let total = 0;
    if (this.sale.items){
      for(let i= 0; i < this.sale.items.length; i++){
        total = total + (this.sale.items[i].quantity *  this.sale.items[i].price )
      }
    }
    return total;
  }
}
