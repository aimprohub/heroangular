import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExternalUrlMappings } from '../shared/UrlMapping';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient : HttpClient) { }

  getLatestDonorAppointment() : Observable<any>{
    return this._httpClient.get(environment.BASE_URL + ExternalUrlMappings.GET_LATEST_DONOR_APPOINTMENT, {withCredentials : true})
  }

}
