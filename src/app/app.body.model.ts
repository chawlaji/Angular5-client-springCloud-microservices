export class DocumentsBody{
    private docId: number;
    private docAccountId: number;
    private docName: string;

    constructor(dId: number, dAccountId: number, dName: string){
        this.docId = dId;
        this.docAccountId = dAccountId;
        this.docName = dName;
    }
}

export class AccountsBody{
    private accId: number;
    private accCustomerId: number;
    private accNumber: string;
    private accDocuments: DocumentsBody[];

    constructor(aId: number, aCustomerId: number, aNumber: string, aDocuments: DocumentsBody[]){
        this.accId = aId;
        this.accCustomerId = aCustomerId;
        this.accNumber = aNumber;
        this.accDocuments = aDocuments;
    }
}

export class CustomersBody{
    private custId: number;
    private custName: string;
    private custType: string;
    private custAccounts: AccountsBody[];

    constructor(cId: number, cName: string, cType: string, cAccounts: AccountsBody[]){
        this.custId = cId;
        this.custName = cName;
        this.custType = cType;
        this.custAccounts = cAccounts;
    }
}