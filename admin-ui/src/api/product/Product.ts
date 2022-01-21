import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  rating: string | null;
  title: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
