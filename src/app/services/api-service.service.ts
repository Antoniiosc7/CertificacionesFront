import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_PORT, API_URL, BASE_URL} from "../../config";
import {GroupPerm} from "../models/GroupPerm";
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) { }

  getTokenData(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      })

    };
    console.log(localStorage.getItem('accessToken'));
    return this.http.get<any[]>(`${API_URL}/token`, httpOptions);
  }

  //GROUP PERMS
  getGroupPerms(): Observable<GroupPerm[]> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<GroupPerm[]>(`${API_URL}/api/admin/group_perms`, httpOptions);
  }

  createGroupPerm(groupPerm: GroupPerm): Observable<GroupPerm> {
    const httpOptions = this.getHttpOptions();
    return this.http.post<GroupPerm>(`${API_URL}/api/admin/group_perms`, groupPerm, httpOptions);
  }

  updateGroupPerm(id: number, groupPermUpdates: GroupPerm): Observable<GroupPerm> {
    const httpOptions = this.getHttpOptions();
    return this.http.put<GroupPerm>(`${API_URL}/api/admin/group_perms/${id}`, groupPermUpdates, httpOptions);
  }

  deleteGroupPerm(id: number): Observable<void> {
    const httpOptions = this.getHttpOptions();
    return this.http.delete<void>(`${API_URL}/api/admin/group_perms/${id}`, httpOptions);
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      })
    };
  }
}
