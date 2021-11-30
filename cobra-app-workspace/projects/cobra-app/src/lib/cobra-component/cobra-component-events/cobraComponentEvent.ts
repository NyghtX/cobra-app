import {CobraComponentEventListener} from "./cobraComponentEventListener";

/**
 * Interface for CobraComponentEvents
 */
export interface CobraComponentEvent<T> {
  /**
   * Subscribes the listener to the event
   * @param listener Listener that is subscribing
   */
  subscribe(listener: CobraComponentEventListener<T>): void;

}
