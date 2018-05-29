import { Component, OnInit } from '@angular/core';
import { CustomersBody, AccountsBody, DocumentsBody } from '../app.body.model';
import { DataFetch } from '../datafetch.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private customerHolder: CustomersBody[] = new Array();

  constructor(
    private dataFetch: DataFetch
  ) { }

  ngOnInit() {

    this.dataFetch.getData('customer/customers').subscribe((customers)=>{

        let arrayLen = customers.length;
        
        for(let i: number = 0; i < arrayLen; i++){
          let accLength: number = customers[i].accounts.length;
          let accountHolder: AccountsBody[] = new Array();
          
          for(let j: number = 0; j< accLength; j++){
            let docLength: number = customers[i].accounts[j].documents.length;
            let docs: DocumentsBody[] = new Array();
            
            for(let k: number = 0; k < docLength; k++){
              docs.push(new DocumentsBody(customers[i].accounts[j].documents[k].documentId, customers[i].accounts[j].documents[k].accountId, customers[i].accounts[j].documents[k].documentName));
            }
            accountHolder.push(new AccountsBody(customers[i].accounts[j].id, customers[i].accounts[j].customerId, customers[i].accounts[j].number, docs)); 
          }
          this.customerHolder.push(new CustomersBody(customers[i].id, customers[i].name, customers[i].type, accountHolder));
        } 
    });
  }

}
