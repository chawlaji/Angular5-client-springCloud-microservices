import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './accounts/accounts.component';
import { CustomerComponent } from './customer/customer.component';
import { DocumentsComponent } from './documents/documents.component';

const appRoutes: Routes = [
    { path:'accounts', component: AccountsComponent },
    { path:'customer', component: CustomerComponent},
    { path:'documents', component: DocumentsComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutes{

}