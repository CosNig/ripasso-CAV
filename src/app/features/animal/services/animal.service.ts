import { MessageService } from './message.service';
import { Animal } from './../../../shared/model/animal';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animalUrl = 'api/animals';

  private log(message: string): void {
    this.messageService.add(`AnimalService: ${message}`);
  }

  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getAllanimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalUrl).pipe(
      tap((_) => this.log('fetched all animals')),
      catchError(this.handleError<Animal[]>('getAllanimals', []))
    );
  }

  getMostVotedAnimals(numOfAnimals: number): Observable<Animal[]> {
    return this.http.get(this.animalUrl).pipe(
      map((filtered: Animal[]) => {
        filtered.sort((a, b) => b.votes - a.votes);
        return filtered.slice(0, numOfAnimals);
      }),
      tap((_) => this.log('fetched most voted animals')),
      catchError(this.handleError<Animal[]>('getMostVotedAnimals', []))
    );
  }
}
