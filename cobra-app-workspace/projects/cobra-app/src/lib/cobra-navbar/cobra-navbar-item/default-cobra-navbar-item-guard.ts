import {CobraNavbarItemGuard} from "./cobra-navbar-item-guard";

export class DefaultCobraNavbarItemGuard implements CobraNavbarItemGuard {
  canAccess(): boolean | Promise<boolean> {
    return true;
  }
}
