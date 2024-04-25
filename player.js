import { Sitting } from "./playerStates.js";

export class Player { //draw and update main character

    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById('player');
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        this.states = [new Sitting(this)];
        this.currentState = this.states[0];
        this.currentState.enter();
    }

    update(input){ //move around based on input, cycle through frames
        
    //Horizontal move code block
       this.x += this.speed;
       if(input.includes('ArrowRight')){
        this.speed = this.maxSpeed;
       }
       else if (input.includes('ArrowLeft')){
        this.speed = -this.maxSpeed;
       }
       else {
        this.speed = 0;
       }
    //Boundaries Set
       if (this.x < 0) this.x = 0;
       if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
    //Vertical Move code block
       if(input.includes('ArrowUp') && this.onGround()) this.vy -= 30; //if on ground and jump, go up 10px
       this.y += this.vy;
       if(!this.onGround()) this.vy += this.weight; //if not on ground, apply gravity until on ground is true
       else this.vy = 0;
    }

    draw(context){ //take values and draw to active frame and coords
        // context.fillStyle = 'red';
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    onGround(){
        return this.y >= this.game.height - this.height;
    }

}