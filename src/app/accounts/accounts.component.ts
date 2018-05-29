import { Component, OnInit } from '@angular/core';
import { DataFetch } from '../datafetch.service';
import { AccountsBody, DocumentsBody } from '../app.body.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  private accountHolder: AccountsBody[] = new Array();

  constructor(
    private dataFetch: DataFetch
  ) { }

  ngOnInit() {
    this.dataFetch.getData('account/accounts/').subscribe((accounts) => {
      
      let arrayLen = accounts.length;
    
      for(let i: number = 0; i < arrayLen; i++){
        let docLength: number = accounts[i].documents.length;
        let docs: DocumentsBody[] = new Array();
        for(let j: number = 0; j < docLength; j++){
          docs.push(new DocumentsBody(accounts[i].documents[j].documentId, accounts[i].documents[j].accountId, accounts[i].documents[j].documentName));
        }
        this.accountHolder.push(new AccountsBody(accounts[i].id, accounts[i].customerId, accounts[i].number, docs));
      }

    });
  }

}
