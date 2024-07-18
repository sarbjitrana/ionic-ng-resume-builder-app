import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateResumeDto } from '../models/create-resume.dto';
// import { CreateResumeDto } from '../models/create-resume.dto';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/resume'; // Update with your NestJS API URL

  constructor(private http: HttpClient) {}

  createResume(createResumeDto: CreateResumeDto): Observable<any> {
    return this.http.post(this.apiUrl, createResumeDto);
  }

  getResumes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
