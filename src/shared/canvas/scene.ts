import { BufferGeometry, Mesh, MeshStandardMaterial, Scene, SpotLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { SubState } from '~/shared/client';

import { VER_FOV_TAN } from './camera';

export const imageDimState = new SubState({
  width: 1,
  height: 1,
  aspect: 1,
  widthByVerFovTan: 1 / VER_FOV_TAN,
  heightByVerFovTan: 1 / VER_FOV_TAN,
});

export const initScene = async (): Promise<Scene> => {
  const image = imageDimState.get();

  const monitorGltf = await new GLTFLoader().loadAsync('/assets/monitor.glb');
  const monitorMesh = monitorGltf.scene.children[0] as Mesh<BufferGeometry, MeshStandardMaterial>;
  monitorMesh.material.roughness = 1;
  monitorMesh.material.metalness = 0;
  monitorMesh.material.metalnessMap = null;
  monitorMesh.scale.x = image.width;
  monitorMesh.scale.y = image.height;
  monitorMesh.scale.z = (image.width + image.height) * 0.5;

  const spotLight = new SpotLight(0x6366f1, 1, 10000, Math.PI * 0.5, 1, 0);
  spotLight.position.y = image.height;
  spotLight.position.z = image.height * 0.5;
  spotLight.lookAt(0, 0, 0);

  const scene = new Scene();
  scene.add(monitorMesh);
  scene.add(spotLight);

  return scene;
};
