import { HouseBuilder } from '../../src/creational/builder';

describe('Creational/Builder Test', () => {
  it('should create a house', () => {
    const house = new HouseBuilder();
    house.buildWalls(4);
    house.buildDoors(2);
    house.buildWindows(2);
    house.buildRoof(1);

    expect(house).toBeDefined();
    expect(house.getResults().walls).toBe(4);
    expect(house.getResults().doors).toBe(2);
    expect(house.getResults().windows).toBe(2);
    expect(house.getResults().roof).toBe(1);
  });
});
