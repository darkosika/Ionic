import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class JsonDataProvider {

  constructor(public http: Http) {
    console.log('Hello JsonDataProvider Provider');
  }
getRemoteData(){
  return this.http.get('http://jsonplaceholder.typicode.com/users').map(res=>res.json());
}

}
