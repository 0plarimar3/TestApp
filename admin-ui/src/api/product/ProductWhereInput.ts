import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  rating?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
