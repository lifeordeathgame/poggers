// JavaScript source code
var player1, player2, player3, player4;
var playerW = 36, playerH = 55;

// TODO var player1Cards = [], player2Cards = [], player3Cards = [], player4Cards = [];  

function startGame() {
    player1 = new component(playerW, playerH, "player1.png", playerW, playerH, "image");
    player2 = new component(playerW, playerH, "player2.png", window.innerWidth - playerW, playerH, "image");
    player3 = new component(playerW, playerH, "player3.png", playerW, window.innerHeight - playerH, "image");
    player4 = new component(playerW, playerH, "player4.png", window.innerWidth - playerW, window.innerHeight - playerH, "image");
    board.start();
}

var board = {
    cavas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateBoard, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.speedX = 0;
    this.speedY = 0;
    this.update = function () {
        ctx = board.context;
        if (this.tpye == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
        else if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

function updateBoard() {
    board.frameNo += 1;
    board.clear();
    z = 65;
    if (board.frameNo == 1 || everyinterval(z)) {
        //TODO card pile check
    }
    player1.newpos();
    player1.update();
    player2.newpos();
    player2.update();
    player3.newpos();
    player3.update();
    player4.newpos();
    player4.update();
}

function restart() {
    window.location.reload();
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || widow.event;
    switch (e.keycode) {
        case 65:
            //p1 left
            player1.speedX = -10;
            break;
        case 87:
            //p1 up
            player1.speedY = -10;
            break;
        case 68:
            //p1 right
            player1.speedX = 10;
            break;
        case 83:
            //p1 down
            player1.speedY = 10;
            break;
        case 20:
            //p1 select
            break;
        case 76:
            //p2 left
            player2.speedX = -10;
            break;
        case 80:
            //p2 up
            player2.speedY = -10;
            break;
        case 222:
            //p2 right
            player2.speedX = 10;
            break;
        case 186:
            //p2 down
            player2.speedY = 10;
            break;
        case 13:
            //p2 select
            break;
        case 86:
            //p3 left
            player3.speedX = -10;
            break;
        case 71:
            //p3 up
            player3.speedY = -10;
            break;
        case 78:
            //p3 right
            player3.speedX = 10;
            break;
        case 66:
            //p3 down
            player3.speedY = 10;
            break;
        case 32:
            //p3 select
            break;
        case 37:
            //p4 left
            player4.speedX = -10;
            break;
        case 38:
            //p4 up
            player4.speedY = -10;
            break;
        case 39:
            //p4 right
            player4.speedX = 10;
            break;
        case 40:
            //p4 down
            player4.speedY = 10;
            break;
        case 17:
            //p4 select
            break;
    }
    
}
