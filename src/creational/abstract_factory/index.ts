export enum CarType {
  MICRO = 'MICRO',
  MINI = 'MINI',
  LUXURY = 'LUXURY',
}

export enum LocationType {
  DEFAULT = 'DEFAULT',
  SWITZERLAND = 'SWITZERLAND',
  BRAZIL = 'BRAZIL',
}

abstract class Car {
  model: CarType;
  location: LocationType;

  constructor(model: CarType, location: LocationType) {
    this.model = model;
    this.location = location;
  }

  abstract construct(): void;
}

class LuxuryCar extends Car {
  constructor(location: LocationType) {
    super(CarType.LUXURY, location);
  }

  construct() {
    console.log('connection to luxury car');
  }
}

class MicroCar extends Car {
  constructor(location: LocationType) {
    super(CarType.MICRO, location);
  }

  construct() {
    console.log('connection to micro car');
  }
}

class MiniCar extends Car {
  constructor(location: LocationType) {
    super(CarType.MINI, location);
  }

  construct() {
    console.log('connection to mini car');
  }
}

class BRAZILCarFactory {
  static buildCar(carType: CarType) {
    const option = {
      MINI: () => new MiniCar(LocationType.BRAZIL),
      MICRO: () => new MicroCar(LocationType.BRAZIL),
      LUXURY: () => new LuxuryCar(LocationType.BRAZIL),
    };

    return option[carType] ? option[carType]() : null;
  }
}

class SWITZERLANDCarFactory {
  static buildCar(carType: CarType) {
    const option = {
      MINI: () => new MiniCar(LocationType.SWITZERLAND),
      MICRO: () => new MicroCar(LocationType.SWITZERLAND),
      LUXURY: () => new LuxuryCar(LocationType.SWITZERLAND),
    };

    return option[carType] ? option[carType]() : null;
  }
}

class DEFAULTCarFactory {
  static buildCar(carType: CarType) {
    const option = {
      MINI: () => new MiniCar(LocationType.DEFAULT),
      MICRO: () => new MicroCar(LocationType.DEFAULT),
      LUXURY: () => new LuxuryCar(LocationType.DEFAULT),
    };

    return option[carType] ? option[carType]() : null;
  }
}

export class CarFactory {
  static buildCar(carType: CarType, location: LocationType): Car | null {
    const option = {
      DEFAULT: () => DEFAULTCarFactory.buildCar(carType),
      BRAZIL: () => BRAZILCarFactory.buildCar(carType),
      SWITZERLAND: () => SWITZERLANDCarFactory.buildCar(carType),
    };
    return option[location] ? option[location]() : null;
  }
}
