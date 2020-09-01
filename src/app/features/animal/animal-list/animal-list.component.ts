import { ActivatedRoute } from '@angular/router';
import { AnimalService } from './../services/animal.service';
import { Observable, of } from 'rxjs';
import { Animal } from './../../../shared/model/animal';
import { Component, OnInit, Input } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
  @Input() cardTitle: string;
  filteredAnimals$: Observable<Animal[]>;
  animals$: Observable<Animal[]>;

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routePath = this.route.snapshot.url[0].path;
    if (routePath === 'dashboard') {
      this.filteredAnimals$ = this.animalService.getMostVotedAnimals(4);
      this.cardTitle = 'Most voted ones';
    } else {
      this.filteredAnimals$ = this.animalService.getAllanimals();
      this.cardTitle = 'All Animals';
    }
    this.animals$ = this.filteredAnimals$;
  }

  search(searchEvent: KeyboardEvent): void {
    of(searchEvent)
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        map((e) => (e.target as HTMLInputElement).value)
      )
      .subscribe((searchTerm) => {
        this.filteredAnimals$ = this.animals$.pipe(
          map((animals) =>
            animals.filter((animal) =>
              animal.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
        );
      });
  }
}
