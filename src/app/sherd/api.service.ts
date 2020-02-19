import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private queryParm = "q";

  constructor(private httpClient: HttpClient) {}
  /**
   * Search
   */
  public Search(query: string) {
    var url = `${environment.apiUrl}?${this.queryParm}=${query}`;
    return this.httpClient.get(url);
  }
}
