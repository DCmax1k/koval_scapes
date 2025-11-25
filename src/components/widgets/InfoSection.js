import React from 'react'
import Image from './Image';

export default function InfoSection({title="", rightSide=false, lightBackground=false, imageIndex=1, children, ...props}) {

    const sections = React.Children.toArray(children);
    sections.splice(imageIndex, 0, 'image');

  return (
    <div className={`InfoSection ${rightSide ? "left":"right"} ${lightBackground ? "backBg":""}`} {...props}>


      {rightSide && (
        <div className={`outparagraphImage ${rightSide ? "left":"right"}`}>
        <Image />
      </div>
      )}


      <div className='words'>
        <h2 className={`${lightBackground ? "backBg":""}`}>{title}</h2>
        {sections.map((section, index) => {
            if (section === 'image') {
              // Image when its between paragraphs on mobile
              return (
                <div className={`inparagraphImage`}>
                  <Image />
                </div>
                
              )
            } else {
              return (
                <div key={index} className={`infoSubsection ${lightBackground ? "backBg":""}`}>
                  {section}
              </div>
              )
            }
            })}
      </div>
        

      {!rightSide && (
      <div className={`outparagraphImage ${rightSide ? "left":"right"}`}>
        <Image />
      </div>
      )}
      
            
    </div>
  )
}