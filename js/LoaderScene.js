export default class LoaderScene extends Phaser.Scene {
	constructor() {
		// Set the Loader scene key
		super({ key: "LoaderScene" });
	}

	// Load all images, videos, plugins, etc, on this method
	preload() {
		// Set the base url where the loader go to get the assets
		this.load.setBaseURL("./assets/");

		// Load some images
		this.load.image("background", "background.png");
		this.load.image("logo", "logo.png");

		// On complete the loader, go to GameScene
		this.load.on("complete", () => {
			this.scene.start("GameScene");
		});
	}

	// Do nothing here, you need to create objects on GameScene
	create() {}

	// Do nothing here,, the update used are on GameScene.
	// This Scene is just used to load assets
	update() {}
}
