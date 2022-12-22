import LoaderScene from "./loaderScene.js";
import GameScene from "./gameScene.js";

// Default game configurations
// You can add more scenes, change variables, add physics, etc
const config = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	parent: "game",
	scene: [LoaderScene, GameScene],
};

new Phaser.Game(config);
