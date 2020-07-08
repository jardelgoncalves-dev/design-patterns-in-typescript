class House {
  walls: number;
  doors: number;
  windows: number;
  roof: number;
}

interface IBuilder {
  buildWalls(n: number): void;
  buildDoors(n: number): void;
  buildWindows(n: number): void;
  buildRoof(n: number): void;
  getResults(): void;
}

export class HouseBuilder implements IBuilder {
  house: House;

  constructor() {
    this.house = new House();
  }

  buildWalls(walls: number) {
    this.house.walls = walls;
  }
  buildDoors(doors: number) {
    this.house.doors = doors;
  }
  buildWindows(windows: number) {
    this.house.windows = windows;
  }
  buildRoof(roof: number) {
    this.house.roof = roof;
  }
  getResults() {
    return this.house;
  }
}
