//Import Image from next/image
import Image from 'next/image'
//Import Factory Logo from image folder
import factoryLogo from "../../image/factory-logo.svg"
//Import Code Click Logo from image folder
import codeClick from "../../image/code-click.svg"
// Import Metadata from next
import  { Metadata } from 'next'

//Create Metadata
export const metadata = {
    //Add Title
    title : "Splash",
}

//Create Splash Function
export default function Splash() {

    //Return Splash Page
    return (
        // Create Splash Page
        <div className="splash">
            
            {/**  Create div with Class container "container import from bootstrap"  */}
            <div className="container">
            {/**  Splash Logog Container with child Element  image the src attribute is the path of image */}
                <div className="splash-logo">
                    <Image src={factoryLogo} alt="Factory Logo" />
                </div>
                {/* Section for Code Click Logo And Social Media Icon */}
                <div className="logo-social">
                    <div className='logo-code-click'>
                        <Image src={codeClick} alt="Code Click Logo" />
                    </div>
                    {/* Social Media List */}
                    <div className='social-icon'>
                        {/**  Create Unorderlist every List"li" contain Two Element 
                            !First : Anchor Tag "a" with href attribute
                            !Second : Icon "i" with class name "Import from fontawesome"
                                ?"fab fa-facebook-f" -> For Facebook
                                ?"fab fa-linkedin-in" -> For Linkedin
                                ?"fab fa-google" -> For Google
                                ?"fab fa-twitter -> For Twitter
                                
                        */}
                        <ul>
                            <li>
                                <a href='#'>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <i class="fa-brands fa-google"></i>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}