import { LinearSRGBColorSpace, WebGLRenderer } from 'three';
import { EffectComposer } from 'postprocessing';

import { canvas } from './canvas';

export const renderer = new WebGLRenderer({
  canvas,
  depth: true,
  stencil: true,
  antialias: false,
  precision: devicePixelRatio < 1 || innerWidth <= 1024 ? 'mediump' : 'highp',
  powerPreference: 'high-performance',
});
renderer.shadowMap.enabled = true;
renderer.outputColorSpace = LinearSRGBColorSpace;
renderer.debug.checkShaderErrors = import.meta.env.DEV;
renderer.setPixelRatio(devicePixelRatio);

export const composer = new EffectComposer(renderer, {
  depthBuffer: true,
  stencilBuffer: true,
  multisampling: 4, // MSAA
});
