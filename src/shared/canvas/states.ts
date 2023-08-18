import { Vector3 } from 'three';

import { SubState } from '~/shared/client';

import { canvas } from './canvas';
import { camera } from './camera';
import { imageDimState } from './scene';

export const timeState = new SubState(0);

export const viewState = new SubState({
  width: 0,
  height: 0,
  aspect: 0,
  distance: { cover: 0, contain: 0 },
});

export const grabState = new SubState({
  isActive: false,
  pointerPosition: { x: 0, y: 0 },
});

export const tweenState = new SubState({
  isActive: false,
  startTime: 0,
  startPosition: new Vector3(0, 0, 0),
  endPosition: new Vector3(0, 0, 0),
});

const observer = new ResizeObserver(() => {
  const view = viewState.get();
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (width === view.width && height === view.height) return;
  const imageDim = imageDimState.get();

  timeState.set(performance.now());
  view.width = width;
  view.height = height;
  view.aspect = width / height;
  if (imageDim.aspect > view.aspect) {
    view.distance.cover = imageDim.heightByVerFovTan;
    view.distance.contain = imageDim.widthByVerFovTan / view.aspect;
  } else {
    view.distance.cover = imageDim.widthByVerFovTan / view.aspect;
    view.distance.contain = imageDim.heightByVerFovTan;
  }

  viewState.trigger();
});
observer.observe(canvas);

document.body.addEventListener('pointermove', (e) => {
  const grab = grabState.get();
  if (grab.isActive) e.preventDefault();

  const x = e.clientX;
  const y = e.clientY - canvas.offsetTop;
  if (x === grab.pointerPosition.x && y === grab.pointerPosition.y) return;

  grab.pointerPosition.x = x;
  grab.pointerPosition.y = y;
});

const PRIMARY_BUTTON = 0;
canvas.addEventListener('pointerdown', (e) => {
  if (e.button !== PRIMARY_BUTTON) return;
  const grab = grabState.get();
  const tween = tweenState.get();

  grab.isActive = true;
  tween.isActive = false;
  timeState.set(performance.now());

  canvas.classList.remove('cursor-grab');
  document.body.classList.add('cursor-grabbing');

  grabState.trigger();
});

document.body.addEventListener('pointerup', (e) => {
  const grab = grabState.get();
  if (!grab.isActive || e.button !== PRIMARY_BUTTON) return;
  const tween = tweenState.get();

  grab.isActive = false;
  tween.isActive = true;
  timeState.set(performance.now());
  tween.startTime = timeState.get();
  tween.startPosition.copy(camera.position);

  canvas.classList.add('cursor-grab');
  document.body.classList.remove('cursor-grabbing');

  tweenState.trigger();
});
