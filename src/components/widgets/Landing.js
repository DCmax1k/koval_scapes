
import Image from './Image'
import InfoSection from './InfoSection'
import Footer from './Footer'

export default function Landing() {
  return (
    <div className='Landing'>
        <div className='landingHeader'>
            <h1>Welcome to Koval Scapes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
        </div>

        {/* Two buttons */}
        <div className='landingButtons'>
            <div>
                <a href='#services' className='button'>Services</a>
            </div>
            <div>
                <a href='/contactus' className='button hollow'>Contact Us</a>
            </div>
        </div>

        {/* Images */}
        <div className='landingImages'> 
            <Image />
            <Image />
            <Image />
            <Image />
        </div>

        <p className='estimate'>Schedule your free estimate today!</p>

        <InfoSection id={"aboutus"} title={"About Us"}>
            <div>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna tempor. Urna tempor pulvinar vivamus fringilla lacus nec metus.
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
            </div>
            

        </InfoSection>

        <InfoSection id={"services"} title={"Services"} lightBackground={true}  rightSide={true} imageIndex={2}>
            <div>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna tempor. Urna tempor pulvinar vivamus fringilla lacus nec metus.
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
            </div>
            

        </InfoSection>

        <Footer />
        
    </div>
  )
}
