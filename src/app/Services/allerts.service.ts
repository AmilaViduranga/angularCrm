/**
 * Created by Amila on 4/17/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import * as alertify from 'alertifyjs';

@Injectable()
export class alertService {
  messageSuccess(message) {
    alertify.error(message);
  }
}
