import React, { useState } from 'react'

function randomImage(min, max) {
  const int = Math.floor(Math.random() * (max - min + 1)) + min;
  return "./images/photos/image" + int + ".png";
}

export default function Image({style, imgStyle, height="100%", src= randomImage(0, 4), ...props}) {

  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{...style, height}} className='Image'>
        <img onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
            ...imgStyle
          }}
          src={src}
          alt="Koval Scapes"
          {...props}
        />
    </div>
  )
}
