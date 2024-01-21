//Import Image Tag From Next
import Image from "next/image";

//Import Map Logo
import MapLogo from "@/image/map.svg";
//Import Gmail Logo
import GmailLogo from "@/image/gmail.svg";

//Import Logo Code Click
import CodeClick from "@/image/code-click.svg";

// Start Footer Function
export default function Footer() {
    return (
        // Start Footer Section
        <div className="footer">
            {/* Import Container From Bootstrap */}
            <div className="container">
                {/* Create Box To Wrap All Item */}
                {/* 
                    ! Start Box Items
                    ? Containe Three Item
                        ? Item 1 => Logo Of Code Click and Text
                        ? Item 2 => Map Of website
                        ? Item 3 => Contact Us Information (Phone , Phone , Whatsapp , Gmail) Import Icon Fron Font Awesome
                */}
                <div className="box-items">
                    <div className="item">
                        <Image src={CodeClick} alt="Code Click" />
                        <p className="logo-description">
                            هي شركة تطوير برمجيات تأسست في نهاية 2015 ونمت مع مرور الوقت.
                            تخصصت الشركة في المواقع الإلكترونية، المتاجر الالكترونية، تطبيقات
                            الهواتف المحمولة، حلول التعليم الإلكتروني، وتطبيقات الأعمال.
                        </p>
                    </div>
                    <div className="item">
                        <h3>خريطة الموقع</h3>
                        <p>
                            <a href="#">من نحن</a>
                        </p>
                        <p>
                            <a href="#">خدمتنا</a>
                        </p>
                        <p>
                            <a href="#">تواصل معنا</a>
                        </p>
                    </div>
                    <div className="item">
                        <h3>معلومات الإتصال</h3>
                        <p>
                            <a href="#">
                                المنصورة شارع جديلة  
                                <Image src={MapLogo} alt="Map Logo"/>
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                01000000000 
                                <i class="fa-solid fa-phone-flip phone"></i>
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                01000000000 
                                <i class="fa-solid fa-phone-flip phone"></i>
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                01000000000 
                                <i class="fa-brands fa-whatsapp whatsapp"></i>
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                codeclick@gmail.com 
                                <Image src={GmailLogo} alt="Gmail Logo" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
