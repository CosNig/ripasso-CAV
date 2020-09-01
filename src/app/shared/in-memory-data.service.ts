import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AnimalType } from './model/enum/animal-type.enum';
import { Animal } from './model/animal';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line: typedef
  createDb() {
    const animals = [
      {
        id: 1,
        name: 'Charlie',
        type: AnimalType.DOG,
        breed: 'German Shepherd',
        age: 8,
        votes: 15,
        isAdopted: false,
        imagePath:
          'https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg',
      },
      {
        id: 2,
        name: 'Hope',
        type: AnimalType.DOG,
        breed: 'German Shepherd',
        age: 9,
        votes: 150,
        isAdopted: true,
        imagePath:
          'https://www.rover.com/blog/wp-content/uploads/2019/11/schafer-dog-4357790_1920-960x540.jpg',
      },
      {
        id: 3,
        name: 'Whiskey',
        type: AnimalType.SNAKE,
        breed: 'Python',
        age: 3,
        votes: 32,
        isAdopted: false,
        imagePath:
          'https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shutterstock_315465929-1024x684.jpg',
      },
      {
        id: 4,
        name: 'Puff Puff',
        type: AnimalType.CAT,
        breed: 'Persian cat',
        age: 2.5,
        votes: 5,
        isAdopted: false,
        imagePath:
          'https://i.pinimg.com/236x/f0/73/7e/f0737ef44ce493308c643263bff528c3--cute-cats-adorable-animals.jpg',
      },
      {
        id: 5,
        name: 'Kelly',
        type: AnimalType.DOG,
        breed: 'German Shepherd',
        age: 8,
        votes: 87,
        isAdopted: true,
        imagePath:
          'https://www.pdsa.org.uk/media/6615/german-shepherd-gallery-1-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132019595560000000',
      },
      {
        id: 6,
        name: 'Black',
        type: AnimalType.BIRD,
        breed: 'Crow',
        age: 8,
        votes: 3,
        isAdopted: false,
        imagePath:
          'https://www.wildlifedepartment.com/sites/default/files/Sharma_AMCR.jpg',
      },
      {
        id: 7,
        name: 'Messy',
        type: AnimalType.CAT,
        breed: 'Bengal cat',
        age: 1,
        votes: 45,
        isAdopted: true,
        imagePath:
          'https://vetstreet.brightspotcdn.com/dims4/default/01f8e7b/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F15%2F41%2Fae157ed346ebbccd0fb3cbc11f9c%2FBengal-AP-1VOXGY-645sm3614.jpg',
      },
      {
        id: 8,
        name: 'Justice',
        type: AnimalType.DOG,
        breed: 'Bulldog',
        age: 12,
        votes: 23,
        isAdopted: false,
        imagePath:
          'https://static.boredpanda.com/blog/wp-content/uploads/2015/04/bulldog-puppy-cute-dog-photography-4__605.jpg',
      },
      {
        id: 9,
        name: 'Sneaky',
        type: AnimalType.SNAKE,
        breed: 'Eastern Rat Snake',
        age: 3.5,
        votes: 8,
        isAdopted: true,
        imagePath:
          'https://www.vtherpatlas.org/wp2016/wp-content/uploads/2017/08/P.-alleghaniensis-1-Nick-Arms-300x201.jpg',
      },
      {
        id: 10,
        name: 'Hungry',
        type: AnimalType.SNAKE,
        breed: 'Boa Constrictors',
        age: 6,
        votes: 62,
        isAdopted: false,
        imagePath:
          'https://thumbs.dreamstime.com/b/royal-boa-opens-mouth-26814628.jpg',
      },
    ];
    return { animals };
  }
  genId(animals: Animal[]): number {
    return animals.length > 0
      ? Math.max(...animals.map((animal) => animal.id)) + 1
      : 1;
  }
}
