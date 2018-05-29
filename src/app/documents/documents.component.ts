import { Component, OnInit } from '@angular/core';
import { DocumentsBody } from '../app.body.model';
import { DataFetch } from '../datafetch.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  
  private documentHolder: DocumentsBody[] = new Array();

  constructor(
    private dataFetch: DataFetch
  ) { }

  ngOnInit() {
    this.dataFetch.getData('document/documents/').subscribe((documents) => {

      let arrayLen = documents.length;
      
      for(let i: number = 0; i < arrayLen; i++){
        this.documentHolder.push(new DocumentsBody(documents[i].documentId, documents[i].accountId, documents[i].documentName));
      }

    });
  }
}
