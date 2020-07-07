import { CarFactory, CarType, LocationType } from '../../src/creational/abstract_factory';

describe('Creational/Abstract Factory Test', () => {
  it('should create a luxury car from Switzerland', () => {
    const car = CarFactory.buildCar(CarType.LUXURY, LocationType.SWITZERLAND);

    expect(car).toBeDefined();
    expect(car.model).toBe(CarType.LUXURY);
    expect(car.location).toBe(LocationType.SWITZERLAND);
  });

  it('should create a mini car from Brazil', () => {
    const car = CarFactory.buildCar(CarType.MINI, LocationType.BRAZIL);

    expect(car).toBeDefined();
    expect(car.model).toBe(CarType.MINI);
    expect(car.location).toBe(LocationType.BRAZIL);
  });

  it('should create a micro car from default', () => {
    const car = CarFactory.buildCar(CarType.MICRO, LocationType.DEFAULT);

    expect(car).toBeDefined();
    expect(car.model).toBe(CarType.MICRO);
    expect(car.location).toBe(LocationType.DEFAULT);
  });
});
