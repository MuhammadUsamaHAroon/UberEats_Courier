import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";

export enum TransportationMode {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING"
}

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED"
}



export declare class Courier {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly lat?: string | null;
  readonly ln?: string | null;
  readonly transportationMode: TransportationMode | keyof typeof TransportationMode;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Courier>);
  static copyOf(source: Courier, mutator: (draft: MutableModel<Courier>) => MutableModel<Courier> | void): Courier;
}

export declare class Basket {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketDis?: (BasketDis | null)[] | null;
  readonly userID?: string | null;
  readonly restaurantsID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Basket>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket>) => MutableModel<Basket> | void): Basket;
}

export declare class BasketDis {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketDis, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly Dishes?: Dishes | null;
  readonly basketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketDisDishesId?: string | null;
  constructor(init: ModelInit<BasketDis>);
  static copyOf(source: BasketDis, mutator: (draft: MutableModel<BasketDis>) => MutableModel<BasketDis> | void): BasketDis;
}

export declare class Dishes {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dishes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restaurantsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dishes>);
  static copyOf(source: Dishes, mutator: (draft: MutableModel<Dishes>) => MutableModel<Dishes> | void): Dishes;
}

export declare class OrderDish {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly Dishes?: Dishes | null;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishDishesId?: string | null;
  constructor(init: ModelInit<OrderDish>);
  static copyOf(source: OrderDish, mutator: (draft: MutableModel<OrderDish>) => MutableModel<OrderDish> | void): OrderDish;
}

export declare class Order {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Restaurants?: Restaurants | null;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderDishes?: (OrderDish | null)[] | null;
  readonly userID: string;
  readonly Courier?: Courier | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderRestaurantsId?: string | null;
  readonly orderCourierId?: string | null;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class Restaurants {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes?: (Dishes | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Restaurants>);
  static copyOf(source: Restaurants, mutator: (draft: MutableModel<Restaurants>) => MutableModel<Restaurants> | void): Restaurants;
}

export declare class User {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly sub?: string | null;
  readonly Orders?: (Order | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}