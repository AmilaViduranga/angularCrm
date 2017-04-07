/**
 * Created by EDI-DELL-02 on 4/4/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class serverConfiguration {
  public Server: string = 'http://192.168.1.5:8001/';
  public ApiUrl: string = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
