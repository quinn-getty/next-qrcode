import "react-redux";

import { StoreState } from "../store/reducers";

declare module "react-redux" {
  interface DefaultRootState extends StoreState {}
}
