import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators'; 

@Injectable()
export class SitesItceService {
  constructor(private http: HttpClient) {
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/itceInfo/sitesITCE.json");
  }
  getSite(grossJson, siteId){
    if(siteId && grossJson)
    return grossJson.filter(site => site.id === siteId)[0];
  }
  public getSitesSimpleInfo(){
  }
}
