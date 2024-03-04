import type { Engine } from "@babylonjs/core/Engines/engine";
import type { Scene } from "@babylonjs/core/scene";

// Change this import to check other scenes
//import { DefaultSceneWithTexture } from "./scenes/defaultWithTexture";
//import { LoadModelAndEnvScene } from "./scenes/loadModelAndEnv";
import { NavigationMeshRecast } from "./scenes/navigationMeshRecast";
//import { PhysicsSceneWithAmmo } from "./scenes/physicsWithAmmo";

export interface CreateSceneClass {
    createScene: (engine: Engine, canvas: HTMLCanvasElement) => Promise<Scene>;
    preTasks?: Promise<unknown>[];
}

export interface CreateSceneModule {
    default: CreateSceneClass;
}

export const getSceneModule = (): CreateSceneClass => {
    //return new DefaultSceneWithTexture();
    //return new LoadModelAndEnvScene();
    return new NavigationMeshRecast();
    //return new PhysicsSceneWithAmmo();
};
