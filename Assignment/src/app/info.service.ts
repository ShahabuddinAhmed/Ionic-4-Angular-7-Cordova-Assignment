import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  _getData() {
     return this.http.get('https://www.miljolare.no/ws/nml/pnc/?service=get_scheme');
  }
}
