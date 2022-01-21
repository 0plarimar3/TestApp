import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  price?: number | null;
  rating?: string | null;
  title?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
