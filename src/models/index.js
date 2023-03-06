// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransportationMode = {
  "DRIVING": "DRIVING",
  "BICYCLING": "BICYCLING"
};

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { Courier, Basket, BasketDis, Dishes, OrderDish, Order, Restaurants, User } = initSchema(schema);

export {
  Courier,
  Basket,
  BasketDis,
  Dishes,
  OrderDish,
  Order,
  Restaurants,
  User,
  TransportationMode,
  OrderStatus
};