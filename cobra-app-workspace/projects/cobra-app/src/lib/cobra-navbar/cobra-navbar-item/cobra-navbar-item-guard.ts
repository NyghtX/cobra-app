/**
 * Guard für die CobraNavbarItems
 */
export interface CobraNavbarItemGuard {
  /**
   * Methode um festzustellen, ob auf das NavbarItem zugegriffen werden kann
   */
  canAccess(): boolean | Promise<boolean>;
}

