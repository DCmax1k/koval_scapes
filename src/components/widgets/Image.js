import React from 'react'

export default function Image({style, imgStyle, height="100%", src="./images/photos/image.png", ...props}) {
  return (
    <div style={{...style, height}} className='Image'>
        <img style={imgStyle}  src={src} alt="Koval Scapes" {...props} />
    </div>
  )
}
