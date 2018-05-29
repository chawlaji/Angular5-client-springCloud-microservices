import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataFetch{
    constructor(
        private http: Http
    ){}
    
    getData(searchFor: string){
        let url = 'http://localhost:8765/api/'+searchFor;
        return this.http.get(url).map((response: Response) => response.json());
    }
}