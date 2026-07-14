import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import SlideUp from "@/components/SlideUp";
import { cormorant } from "@/fonts/cormorant";

export default function ContactPage(){
    return (
        <main className="max-w-4xl mx-auto p-6 space-y-8">
            <FadeIn delay={0.2} duration={2}>
            <h1 className={`${cormorant.className} text-6xl md:text-8xl font-medium text-text pt-20 pb-6 text-center`}>Leave a message</h1>
            </FadeIn>
            <FadeIn delay={0.5} duration={2}>
                <p className={`text-sm md:text-md text-text/80 font-light pb-10 text-center`}>
                    Filling this out sends your message directly to my email.
                    I check it daily and aim to reply within 24 hours.
                </p>
            </FadeIn>
            <SlideUp y={60} delay={0.1} duration={1.2}>
            <ContactForm />
            </SlideUp>
        </main>
    )
}