import { AnimalType } from './enum/animal-type.enum';

export interface Animal {
  id: number;
  name: string;
  type: AnimalType;
  breed: string;
  age: number;
  votes: number;
  isAdopted: boolean;
  imagePath?: string;
}
