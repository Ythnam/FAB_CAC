import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigModel } from '../models/config.model';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: any; //ConfigModel;

  constructor(private http: HttpClient) {}

  // Charge le fichier JSON correspondant à l'environnement
  loadConfig(env: string): Promise<void> {
    const configPath = `./environments/app-config.${env}.json`;
    return this.http.get(configPath).toPromise().then((config) => {
      this.config = config;
    });
  }

  // Accès aux valeurs du fichier JSON
  get apiBaseUrl(): string {
    return this.config?.apiBaseUrl || '';
  }
}