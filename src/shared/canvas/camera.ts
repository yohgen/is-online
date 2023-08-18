import { PerspectiveCamera } from "three";

import { canvas } from "./canvas";

export const PERSPECITVE = 800;
export const VER_FOV_TAN = canvas.clientHeight / PERSPECITVE;
export const VER_FOV_DEG = (360 * Math.atan(VER_FOV_TAN * 0.5)) / Math.PI;
export const camera = new PerspectiveCamera(VER_FOV_DEG, 1, 0.0001, 10000);
