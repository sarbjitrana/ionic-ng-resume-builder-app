import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateResumeDto } from '../models/create-resume.dto';
import { environment } from '../../environments/environment';
// import { CreateResumeDto } from '../models/create-resume.dto';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = environment.apiUrl; // Update with your NestJS API URL

  constructor(private http: HttpClient) {}

  createResume(createResumeDto: CreateResumeDto): Observable<any> {
    return this.http.post(this.apiUrl+'/resume', createResumeDto);
  }

  getResumes(): Observable<any> {
    return this.http.get(this.apiUrl+'/resume');
  }
}
