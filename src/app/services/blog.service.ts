import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  domain = environment.ENDPOINT_URL

  constructor(private http: HttpClient) { }

  loadPosts() {
    return this.http.get(`${this.domain}/posts`)
  }

}
