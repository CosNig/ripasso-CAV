import { Animal } from './../../../shared/model/animal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css'],
})
export class AnimalCardComponent implements OnInit {
  @Input() animal: Animal;

  constructor() {}

  adoptedText(animal: Animal): string {
    return animal.isAdopted ? 'Adopted' : 'Waiting for adoption';
  }

  adoptedClass(animal: Animal): any {
    return {
      adopted: animal.isAdopted,
      'not-adopted': !animal.isAdopted,
    };
  }

  ngOnInit(): void {}
}
