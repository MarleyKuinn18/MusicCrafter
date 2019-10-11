window.addEventListener('load', () => {

      const sounds = document.querySelectorAll('.sound');
      const pads = document.querySelectorAll('.pads div');
      const music = document.querySelector('.music');
      const colors = ["#60d394",
                      "#d36064",
                      "#c060d3",
                      "#d3d160",
                      "#6860d3",
                      "#60b2d3"]

      //sound section
      pads.forEach( (pad, index) => {
          pad.addEventListener('click', () => {

              sounds[index].currentTime = 0;
              sounds[index].play();

              createBubbles(index);
          });
      });

      const createBubbles = (index) => {

        const bubble = document.createElement("div");
        music.appendChild(bubble);
        background.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', () => {
             music.removeChild(this);
        });
      };
});

//console.log(sounds);