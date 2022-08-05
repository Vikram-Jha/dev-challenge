import { City } from "./city";
import { CurrentConditions } from "./weather";

/**
 * The data model used by the current-conditions component to populate the UI.
 */
export interface CityConditions extends City, CurrentConditions {}
