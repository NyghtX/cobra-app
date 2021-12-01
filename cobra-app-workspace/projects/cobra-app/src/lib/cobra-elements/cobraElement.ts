import {CobraElementConfig} from "./cobraElementConfig";

export interface CobraElement<TConfig extends CobraElementConfig> {
  config: TConfig;
}
