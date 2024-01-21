'use client'
//Import Image From Next
import Image from 'next/image'
//IMport UseState (hook) From React
import { useState } from 'react'
//Import Gmail Icon
import Gmail from '@/image/gmail.svg'
// Start Conatct Us Function
export default function Contactus() {

    // Start UseState (hook) To Handle Form Data
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        subject: '',
        message: '',
    });

    // Function to handle changes in form inputs
    const handleChange = (e) => {
        // name => input name
        // value => input value
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Log the form data (You can replace this with your desired logic)
        
        // Optionally, you can reset the form fields after submission
        setFormData({
            fName: '',
            lName: '',
            email: '',
            subject: '',
            message: '',
        });
    };


    return (
        // Start Contact Us Section Import Container From Bootstrap
        <div className="container">
            {/* 
                ! Start Contact Us Section
                ? Containe Two Section 
                    ? Fisrt Section => Contact Us Title
                    ? Second Section => Contact Us Form And Contact Us Information
                        Fisrt Section => Contact Us Form
                            ? Form Containe 4 Input
                                ? Input 1 => First Name
                                ? Input 2 => Last Name
                                ? Input 3 => Email
                                ? Input 4 => Subject
                                ? Textarea => Message
                                ? Button => Submit
                        Second Section => Contact Us Information
                            ? Containe 4 Information
                                ? Information 1 => Phone
                                ? Information 2 => Phone
                                ? Information 3 => Whatsapp
                                ? Information 4 => Gmail
            */}
            <div className="contact-us">

                <div className="contact-title">
                    <h3>تواصل معنا</h3>
                </div>
                <div className="main-contact">
                    <div className="left-section">
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className="col-6">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInputDisabled" placeholder="الاسم الاخير" required value={formData.lName} name='lName' onChange={handleChange}/>
                                        <label for="floatingInputDisabled">الاسم الاخير</label>
                                    </div>
                                </div> 
                                <div className="col-6">
                                    <div className="form-floating mb-3">
                                        <input type="textt" className="form-control" id="floatingInputDisabled" placeholder="الاسم الاول" required value={formData.fName} name='fName' onChange={handleChange}/>
                                        <label for="floatingInputDisabled">الاسم الاول</label>
                                    </div>
                                </div> 
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInputDisabled" placeholder="البريد الالكتروني" required value={formData.email} name='email' onChange={handleChange}/>
                                <label for="floatingInputDisabled">البريد الالكتروني</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInputDisabled" placeholder="الموضوع" required value={formData.subject} name='subject' onChange={handleChange}/>
                                <label for="floatingInputDisabled">الموضوع</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="الرسالة" id="floatingTextareaDisabled" required value={formData.message} name='message' onChange={handleChange}></textarea>
                            <label for="floatingTextareaDisabled">الرسالة</label>
                            </div>
                            <div className='submit-box'>
                                <button className='btn btn-primary'>إرسال</button>
                            </div>
                        </form>
                    </div>
                    <div className="right-section">
                        <p className='text'>لا تتردد ، تحدث معنا الان</p>
                        <p className='phone'>
                            <a href="">
                                <span>+20325054547231</span>
                                <i class="fa-solid fa-phone-flip"></i>
                            </a>
                        </p>
                        <p className='phone'>
                            <a href="">
                                <span>+20325054547231</span>
                                <i class="fa-solid fa-phone-flip"></i>
                            </a>
                        </p>
                        <p className='whatsapp'>
                            <a href="">
                                <span>+20325054547231</span>
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </p>
                        <p className='gmail'>
                            <a href="">
                                <span>codeclick@gmail.com</span>
                                <Image src={Gmail} alt='Gmail Icon' />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}