import React from 'react'

export default function InfoSection({title="", rightSide=false, lightBackground=false, children, ...props}) {

    const sections = React.Children.toArray(children);

  return (
    <div className={`InfoSection ${rightSide ? "left":"right"} ${lightBackground ? "backBg":""}`} {...props}>
        <h2 className={`${lightBackground ? "backBg":""}`}>{title}</h2>
        {sections.map((section, index) => (
            <div key={index} className={`infoSubsection ${lightBackground ? "backBg":""}`}>
                {section}
            </div>
        ))}
    </div>
  )
}