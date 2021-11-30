import {CobraComponentDefinition} from "./cobra-component-definition";

export const CobraComponent = CobraComponentDecorator;

function CobraComponentDecorator(options: CobraComponentDefinition) {
  return function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      cobraComponent = options;
    };
  }

}
