class Screen{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    diagonal(){
        return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }
}

let width = 500;
let height = 600;
let screen = new Screen(width, height);
console.log(screen.diagonal());

module.exports = Screen;