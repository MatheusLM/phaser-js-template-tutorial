## This is a repository for show how to start with Phaser JS

### I have used just Phaser JS and HTML

#### To start using this, you need to clone this repository, using:

```
git clone https://github.com/MatheusLM/phaser-js-template-tutorial.git
```

#### After complete the clone, you need to run the project with a server. I used xampp:

##### Link for download xampp

```
https://www.apachefriends.org/download.html
```

#### And finally, to use the project, just open in the browser

## LoaderScene

#### Here, we have a asset loader.

#### All images, videos, plugins, etc, you need to use on game, need to load here.

```javascript
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
```

## GameScene

#### Here, we have a main game script

### Create method

#### On create method, you need to instantiate all game objects you need to use.

```javascript
create() {
    ...
	// Add images, objects, etc
    ...
}
```

### Update method

#### Here is on the magic happens...

#### All game logic (like animations, movements, etc) have to be called on this function, to work and update each frame.

```javascript
update() {
    ...
	this.checkKeyboardInput();
	// You can add more logic here, this is just an example
    ...
}
```
