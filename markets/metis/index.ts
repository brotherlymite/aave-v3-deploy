import { IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const MetisConfig: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 37, // TODO: check
  MarketId: "Metis Aave Market",
  ATokenNamePrefix: "Metis",
  StableDebtTokenNamePrefix: "Metis",
  VariableDebtTokenNamePrefix: "Metis",
  SymbolPrefix: "Met",
  ReserveAssets: {},
  ChainlinkAggregator: {},
  ReservesConfig: {},
  EModes: {},
};

export default MetisConfig;
