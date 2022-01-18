'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/

function catWalk() {
    const cat = document.getElementById('image');
    cat.style.left = '0px';
    let left = 0;
    const screenWidth = window.innerWidth;
    console.log(screenWidth)

    setInterval(() => {
        if (left <= (screenWidth / 2)) {
            left += 10;
            cat.style.left = `${left}px`
        }
        if (left === (screenWidth / 2)) {
            cat.style.display = 'none';
            const dancingCat = document.createElement('img');
            dancingCat.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
            document.body.appendChild(dancingCat);
            dancingCat.style.left = `${(screenWidth / 2)}px`;
            dancingCat.style.display = 'block';
            setTimeout(() => {
                dancingCat.style.display = 'none';
                setInterval(() => {
                    if (left > (screenWidth / 2) && left < screenWidth) {
                        if (left > (screenWidth - 100)) {
                            left = 0;
                        }
                        cat.style.display = 'block';
                        left += 10;
                        cat.style.left = `${left}px`
                    }
                }, 50)
            }, 5000)
        }
    }, 50)
}
window.addEventListener('load', catWalk);