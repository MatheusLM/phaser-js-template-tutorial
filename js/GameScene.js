export default class GameScene extends Phaser.Scene {
	listenedKeys = [];
	constructor() {
		// Set the Game scene key
		super({ key: "GameScene" });
	}

	// Do nothing here, because the preload used is the LoaderScene
	preload() {}

	// Create game objects, some logics, etc, on this method
	create() {
		// Get center of the canvas
		const center = {
			x: this.game.canvas.width / 2,
			y: this.game.canvas.height / 2,
		};

		// Add images
		this.background = this.add.image(center.x, center.y, "background");
		this.logo = this.add.image(center.x, center.y, "logo");

		// Add keyboard listeners
		this.addKeyboardListener("keyLeft", "A", () => (this.logo.x -= 1));
		this.addKeyboardListener("keyRight", "D", () => (this.logo.x += 1));
		this.addKeyboardListener("keyUp", "W", () => (this.logo.y -= 1));
		this.addKeyboardListener("keyDown", "S", () => (this.logo.y += 1));
		this.addKeyboardListener("scaleUp", "PAGE_UP", () => {
			this.logo.scaleX += 0.01;
			this.logo.scaleY += 0.01;
		});
		this.addKeyboardListener("scaleDown", "PAGE_DOWN", () => {
			this.logo.scaleX -= 0.01;
			this.logo.scaleY -= 0.01;
		});
	}

	// Logic to do on each frame update
	// Like moves, animations, etc
	update() {
		this.checkKeyboardInput();
		// You can add more logic here, this is just an example
	}

	checkKeyboardInput() {
		this.listenedKeys.forEach(
			(keyListener) => keyListener.name.isDown && keyListener.action()
		);
	}

	addKeyboardListener(name, key, action) {
		this[name] = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes[key]
		);
		this.listenedKeys.push({ name: this[name], action });
	}
}
