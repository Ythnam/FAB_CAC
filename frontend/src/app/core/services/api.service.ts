import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
constructor(private http: HttpClient, private configService: ConfigService) {}

get<T>(endpoint: string, queryParams?: { [key: string]: string | number }): Observable<T> {
    const url = `${this.configService.apiBaseUrl}/${endpoint}`;

    let params = new HttpParams();
    if (queryParams) {
      Object.keys(queryParams).forEach((key) => {
        params = params.set(key, queryParams[key].toString());
      });
    }
    
    return this.http.get<T>(url, { params });
}

getById<T>(endpoint: string, id: string): Observable<T> {
    const url = `${this.configService.apiBaseUrl}/${endpoint}/${id}`;
    return this.http.get<T>(url);
    }

post<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.configService.apiBaseUrl}/${endpoint}`;
    return this.http.post<T>(url, body);
}

put<T>(endpoint: string, id: string, body: any): Observable<T> {
    const url = `${this.configService.apiBaseUrl}/${endpoint}/${id}`;
    return this.http.put<T>(url, body);
    }
    
    delete(endpoint: string, id: string): Observable<void> {
    const url = `${this.configService.apiBaseUrl}/${endpoint}/${id}`;
    return this.http.delete<void>(url);
    }
}