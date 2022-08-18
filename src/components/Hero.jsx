import React from 'react'
import { useEffect, useRef } from 'react';

const Hero = () => {

//! The typewriter function is not mine! Found it on npm https://www.npmjs.com/package/my-typewriter and modified it to work in React... 
//! It is still a bit wonky as whenever DOM updates, the typing says adios and text flickers jankily off which the only solution is page refresh... it's okay for frontend only but that's it
    const textSpan = useRef();
    const typeWriter = ({
    texts,
    textContainer,
    letterPause = 1200,
    typeSpeed = 0,
    eraseSpeed = 100,
    blinkSpeed = 600,
    speed = 200,
    count = 0,
    index = 0,
    currentText = "",
    containerText = "",
    direction = true,
    }) => {
  // Blink Cursor
  const blinkCursor = document.createElement("span");
  blinkCursor.textContent = "|";
  setInterval(() => {
    console.log(blinkCursor.style.opacity)
    if(blinkCursor.style.opacity == 1) {
        blinkCursor.style.opacity = 0;
    } else if(blinkCursor.style.opacity == 0) {
        blinkCursor.style.opacity = 1;
    }
    // blinkCursor.style.opacity = blinkCursor.style.opacity === 0 ? 1 : 0;
  }, blinkSpeed);

  const typing = () => {
    // Reset count after loop
    if (count === texts.length) { count = 0 }
    // Grab current text from array
    currentText = texts[count];
    // Start erasing when all letters completed
    if (containerText.length === currentText.length) {
      direction = false;
    }
    // Start typing when letter length equals 1
    if (containerText.length === 1) {
      direction = true;
    }

    if (direction) {
      // typing speed if available
      if (typeSpeed > 0) { speed = typeSpeed }
      containerText = currentText.slice(0, index++);
      textContainer.textContent = containerText;
      textContainer.appendChild(blinkCursor);
      if (containerText.length === currentText.length) {
        // If letterPause if defined
        if (letterPause > 0) {
          // Pause at last letter
          speed = letterPause;
        }
      }
    } else {
      // Erase speed if available
      if (eraseSpeed > 0) {
        // change speed to eraseSpeed
        speed = eraseSpeed;
      }
      containerText = currentText.slice(0, currentText.length - index++);
      textContainer.textContent = containerText;
      textContainer.appendChild(blinkCursor);
      // Move to next word when completed
      if (containerText.length === 1) {
        count++;
        index = 0;
        direction = true;
      }
    }
    setTimeout(typing, speed);
  };

  typing();
}
    useEffect(() => {
        typeWriter({
            texts:['BTB', 'BTC', 'SASS'],
            textContainer: textSpan.current,
            typeSpeed: '120',
            eraseSpeed: '140',
        })
    }, [])
    return (
        <div className='text-white'>
            <div className="max-w-[800px] w-full h-screen mt-[-96px] mx-auto flex flex-col justify-center items-center text-center">
                <p className="p-2 text-[#00df9a] font-[800] md:text-xl sm:text-lg text-base">GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:py-6 md:text-7xl sm:text-6xl text-4xl font-bold'>Grow with data.</h1>
                
                <div className='py-4 flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold'>
                        Fast, flexible financing for
                    </p>
                    <span ref={textSpan} id='my-typewriter' className='md:pl-3 pl-2 md:text-4xl sm:text-3xl text-xl font-bold text-[#696969]'></span>
                </div>
                <p className='md:text-2xl text-xl font-bold text-[#696969]'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                <button className='w-[200px] my-6 py-3 rounded-md bg-[#00df9a] text-black font-semibold'>Get Started</button>
            </div>
        </div>
)
}

export default Hero;