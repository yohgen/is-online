import { SubState } from "~/shared/client";

export const button = document.querySelector('#nav-button') as HTMLButtonElement;

export const menu = document.querySelector('#nav-menu') as HTMLElement;

export const navState = new SubState(false);

document.body.addEventListener('click', (e: MouseEvent) => {
  const node = e.target as Node;
  if (button.contains(node) || menu.contains(node) || !navState.get()) return;
  navState.set(false).trigger();
});
