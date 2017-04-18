/**
 * Created by Amila on 4/18/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class serverAddressesService {
  actionUrl: any;
  fileManager: any;

  constructor() {
    this.actionUrl = 'http://192.168.1.7:8009/api/';
    this.fileManager = 'http://192.168.1.51:8004/files/';
  }

}
