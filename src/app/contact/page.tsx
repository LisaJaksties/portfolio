import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import {soligant} from "@/fonts/soligant";
import SlideUp from "@/components/SlideUp";

export default function ContactPage(){
    return (
        <main className="max-w-4xl mx-auto p-6 space-y-8">
            <FadeIn delay={0.2} duration={2}>
            <h1 className={`${soligant.className} text-7xl font-medium pt-20 pb-10 text-center`}>Leave a message</h1>
            </FadeIn>
            <SlideUp y={60} delay={0.1} duration={1.2}>
            <ContactForm />
            </SlideUp>
        </main>
    )
}