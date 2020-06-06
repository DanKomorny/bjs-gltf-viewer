import * as BABYLON from "@babylonjs/core";
//import * as LOADER from "@babylonjs/loaders";
//import * as GUI from "@babylonjs/gui";

export default class Game {
  engine: BABYLON.Engine;
  scene: BABYLON.Scene;
  constructor(elem: HTMLCanvasElement) {
    this.engine = new BABYLON.Engine(elem, true);
    this.scene = new BABYLON.Scene(this.engine);
    this.scene.debugLayer.show();
  }

  setup(): void {
    this.scene.createDefaultCameraOrLight(false, true, true);
  }

  run(): void {
    this.engine.runRenderLoop(() => this.scene.render());
  }
}
