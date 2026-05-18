import {soligant} from "@/fonts/soligant";
import FadeIn from "@/components/FadeIn";

export default function PrivacyPolicy(){
    return (
        <main>
            <FadeIn delay={0.2} duration={2}>
                <h1 className={`${soligant.className} text-text text-7xl font-medium pt-20 pb-10 text-center`}>Privacy Policy</h1>
            </FadeIn>
            <div className="text-text p-2 text-center md:text-start md:max-w-4xl mx-auto">

                <p className="text-lg md:text-2xl">
                    Hosting
                </p>
                <p className="text-sm md:text-lg pt-3">
                    Hosting provider: Vercel Inc. (located in United States) <br/>
                    technical server log data can be processed: <br/>
                    IP address, browser type, date/time, requests <br/>
                    Purpose: website operation and security <br/>
                    Legal basis: article 6(1)(f) of the GDPR (legitimate interest)
                </p>

                <p className="text-lg md:text-2xl pt-8">
                    Contact form data

                </p>
                <p className="text-sm md:text-lg pt-3">
                    When you use the contact form, the information you provide (name, e-mail address, message) will be
                    processed to
                    handle and respond to your inquiry. The message is sent via Gmail / Google.
                </p>

                <p className="text-lg md:text-2xl pt-8">
                    External links
                </p>

                <p className="text-sm md:text-lg pt-3">
                    This website contains links to external websites, including Instagram, GitHub and Figma.
                    When you click on such a link, you leave this website and are redirected to the
                    respective external provider.
                    Please note that the privacy policies and data processing practices
                    of the respective providers apply after leaving this website.
                </p>

                <p className="text-lg md:text-2xl pt-8">
                    User rights under GDPR
                </p>

                <p className="text-sm md:text-lg pt-3">
                    Under applicable data protection laws,
                    including the GDPR, you have the following rights regarding your personal data:
                </p>

                <ul className="list-disc pl-6 space-y-2 pt-3">
                    <li className="text-sm md:text-lg">Right of access</li>
                    <li className="text-sm md:text-lg">Right to erasure</li>
                    <li className="text-sm md:text-lg">Right to rectification</li>
                    <li className="text-sm md:text-lg">Right to object to processing</li>
                    <li className="text-sm md:text-lg">Right to lodge a complaint with a supervisory authority</li>
                </ul>
                <p className="text-sm md:text-lg pt-3">
                    To exercise your rights, contact:
                    huinya.illust@gmail.com
                </p>
            </div>
        </main>
    )
}