import { Player } from "./player.js";
import { InputHandler } from "./input.js";

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game{
        //attr
        
        //constr
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        //behavior
        update(){ //runs on every frame refresh
            this.player.update(this.input.keys);
        }

        draw(context){ //draws objects to screen in loop
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});