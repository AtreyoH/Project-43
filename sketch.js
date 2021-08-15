var bg, bg2, form;
var score = 0;
var playerInput1, playerInput2, playerInput3
var database;
var tickImg, tick1, tick2, tick3;
function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  tickImg = loadImage("Tick.png")

}

function setup() {
  createCanvas(1000, 500);
  form = new Form()

  tick1 = createSprite(200, 170)
  tick1.addImage("right", tickImg)
  tick1.scale = 0.75
  tick1.visible = false

  tick2 = createSprite(825, 170)
  tick2.addImage("right", tickImg)
  tick2.scale = 0.75
  tick2.visible = false

  tick3 = createSprite(530, 400)
  tick3.addImage("right", tickImg)
  tick3.scale = 0.75
  tick3.visible = false

}

function draw() {
  background(bg);
  form.display()
  textSize(23);
  fill("white");
  text("Score: " + score, 500, 50);
  //text(mouseX+ ","+ mouseY,mouseX,mouseY)
  textSize(25)
  text("REVBAILA", 135, 125)
  textSize(20)
  fill("lightBlue")
  text("Hint: Always changing, not constant!!", 40, 160)
  textSize(25)
  fill("white")
  text("CUTNIFON", 760, 120)
  textSize(20)
  fill("lightBlue")
  text("Hint: Performs a particular task!!", 680, 160)
  textSize(25)
  fill("white")
  text("ATEDASBA", 470, 350)
  textSize(20)
  fill("lightBlue")
  text("Hint: Stores all information!!", 410, 390)
  if (playerInput1 === "VARIABLE" || playerInput1 === "Variable" || playerInput1 === "variable") {
    score = +1
    tick1.visible = true
  }
  if (playerInput2 === "FUNCTION" || playerInput2 === "Function" || playerInput2 === "function") {
    score++
    tick2.visible = true
  }
  if (playerInput3 === "DATABASE" || playerInput3 === "Database" || playerInput3 === "database") {
    score++
    tick3.visible = true
  }
  if (score === 3) {
    clear();
    background(bg2)
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED!!", 300, 240);
    tick1.visible = false
    tick2.visible = false
    tick3.visible = false
    form.hide()
  }

  drawSprites()
}