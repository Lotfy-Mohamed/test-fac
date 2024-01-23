//Import Image From Next
import Image from "next/image";

//Import Image From image floder
import ErpImage from "../../image/erp.svg";

// Sart of Whoarewe Function
export default function Erp() {
    return (
        <>
            {/* 
                Start of ERP Section
                !Conatine Two Section 
                ? Fisrt Section => For Image  => Containe The Image Of The Section sHOW Left  
                ? Second Section => erp-content => Containe The Content Of The Section
                    h3 => Title Of The Section
                    containe ul => Containe li => Containe p
                    Unorder List
                        li -> List Item
                            p -> Paragraph For Text
                */}
            <div className="erp-section">
                <div className="container">
                    <div className="erp">
                        <div className="image-wrap" data-aos="fade-up"
                            // data-aos-easing="ease-out-cubic"
                            data-aos-duration="1500">
                            {/* Add Data Aos From Aos  Library*/}
                            <div className="image-box">
                                <div className="item-box">
                                    <Image src={ErpImage} alt="ErpImage" />
                                </div>
                            </div>
                        </div>
                        <div className="text-box" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="200"
                            data-aos-offset="0">
                            {/* Add Data Aos From Aos  Library*/}
                            <h3>Code Click ERP System</h3>
                            <div>
                                <ul>
                                    <li>
                                        <p>
                                            - تاريخيًا، كانت أنظمة ERP تشكل مجموعات منفصلة، حيث كان
                                            يتطلب كل نظام رموزًا مكلفة ومعقدة مُخصصة لتلبية احتياجات
                                            العمل الفريدة، مما أدى إلى إبطاء أو حتى منع تبني تقنيات
                                            جديدة أو تحسين العمليات.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            - الفارق البارز في برامج ERP الحديثة يتجلى في قدرتها على دمج
                                            هذه العمليات المتنوعة في نظام واحد متكامل، حيث لا تقتصر فقط
                                            على توفير اتصال البيانات داخل نظام ERP، بل تمتد إلى أدوات
                                            الإنتاجية والتجارة الإلكترونية وحتى حلول تفاعل العملاء.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            - بالإضافة إلى ذلك، تقدم حلول ERP الحديثة خيارات نشر مرنة،
                                            وأمانًا وخصوصية محسّنة، واستدامة، وتخصيصًا بتكلفة برمجية
                                            منخفضة، مما يُعزز الاستمرارية والمرونة في عملك ويسهم في
                                            تحسين العمليات عبر كامل نطاق عملك.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            - يتميز حلاً ERP الحديثًا أكثر من غيره بالقدرة على بناء
                                            استمرارية ومرونة في الأعمال والعمليات، مما يُسهم في توفير
                                            رؤى أفضل تعزز قدرتك على الابتكار بسرعة في الوقت الحالي
                                            وتجهيز عملك لتحديات المستقبل.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
                Start of jobs-list Section
                !Conatine Two Section 
                ? Fisrt Section => list-head => Containe The Title Of The Section 
                ? Second Section => list-content => Containe The Content Of The Section
                    containe ul => Containe li => Containe p
                    Unorder List
                        li -> List Item
                            p -> Paragraph For Text
                */}
            <div className="container">
                <div className="jobs-list" data-aos="zoom-in-down">
                    <div className="list-head">
                        <p> ما هي وظائف العمل التي يمكن تحسينها باستخدام ERP ؟</p>
                    </div>
                    <div className="list-content">
                        <ul>
                            <li>
                                <p>
                                    يمكن أن يغطي نظام ERP العديد من الوظائف الأساسية عبر مؤسستك -
                                    مما يساعد على كسر الحواجز بين المكتب الأمامي والمكتب الخلفي مع
                                    توفير القدرة على تكييف الحل الخاص بك مع أولويات العمل الجديدة.
                                    تتضمن بعض وظائف العمل الرئيسية ما يلي:
                                </p>
                            </li>
                            <li>
                                <p>
                                    يمكن أن يغطي نظام ERP العديد من الوظائف الأساسية عبر مؤسستك -
                                    مما يساعد على كسر الحواجز بين المكتب الأمامي والمكتب الخلفي مع
                                    توفير القدرة على تكييف الحل الخاص بك مع أولويات العمل الجديدة.
                                    تتضمن بعض وظائف العمل الرئيسية ما يلي:
                                </p>
                            </li>
                            <li>
                                <p>
                                    يمكن أن يغطي نظام ERP العديد من الوظائف الأساسية عبر مؤسستك -
                                    مما يساعد على كسر الحواجز بين المكتب الأمامي والمكتب الخلفي مع
                                    توفير القدرة على تكييف الحل الخاص بك مع أولويات العمل الجديدة.
                                    تتضمن بعض وظائف العمل الرئيسية ما يلي:
                                </p>
                            </li>
                            <li>
                                <p>
                                    يمكن أن يغطي نظام ERP العديد من الوظائف الأساسية عبر مؤسستك -
                                    مما يساعد على كسر الحواجز بين المكتب الأمامي والمكتب الخلفي مع
                                    توفير القدرة على تكييف الحل الخاص بك مع أولويات العمل الجديدة.
                                    تتضمن بعض وظائف العمل الرئيسية ما يلي:
                                </p>
                            </li>
                            <li>
                                <p>
                                    يمكن أن يغطي نظام ERP العديد من الوظائف الأساسية عبر مؤسستك -
                                    مما يساعد على كسر الحواجز بين المكتب الأمامي والمكتب الخلفي مع
                                    توفير القدرة على تكييف الحل الخاص بك مع أولويات العمل الجديدة.
                                    تتضمن بعض وظائف العمل الرئيسية ما يلي:
                                </p>
                            </li>
                            <li>
                                <p>
                                    يمكن أن يغطي نظام ERP العديد من الوظائف الأساسية عبر مؤسستك -
                                    مما يساعد على كسر الحواجز بين المكتب الأمامي والمكتب الخلفي مع
                                    توفير القدرة على تكييف الحل الخاص بك مع أولويات العمل الجديدة.
                                    تتضمن بعض وظائف العمل الرئيسية ما يلي:
                                </p>
                            </li>
                            <li>
                                <p>
                                    يمكن أن يغطي نظام ERP العديد من الوظائف الأساسية عبر مؤسستك -
                                    مما يساعد على كسر الحواجز بين المكتب الأمامي والمكتب الخلفي مع
                                    توفير القدرة على تكييف الحل الخاص بك مع أولويات العمل الجديدة.
                                    تتضمن بعض وظائف العمل الرئيسية ما يلي:
                                </p>
                            </li>
                            <li>
                                <p>
                                    يمكن أن يغطي نظام ERP العديد من الوظائف الأساسية عبر مؤسستك -
                                    مما يساعد على كسر الحواجز بين المكتب الأمامي والمكتب الخلفي مع
                                    توفير القدرة على تكييف الحل الخاص بك مع أولويات العمل الجديدة.
                                    تتضمن بعض وظائف العمل الرئيسية ما يلي:
                                </p>
                            </li>
                            <li>
                                <p>
                                    يمكن أن يغطي نظام ERP العديد من الوظائف الأساسية عبر مؤسستك -
                                    مما يساعد على كسر الحواجز بين المكتب الأمامي والمكتب الخلفي مع
                                    توفير القدرة على تكييف الحل الخاص بك مع أولويات العمل الجديدة.
                                    تتضمن بعض وظائف العمل الرئيسية ما يلي:
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
