"use client";
import { useState } from "react";
import FadeIn from "../components/FadeIn";

export default function ContactForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("idle");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setStatus("success");
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            });

            setTimeout(() => setStatus("idle"), 4000);
        } else {
            setStatus("error");

            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <main>
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto space-y-8"
            >
                <div className="text-text flex flex-row gap-4 items-center mb-3">
                    <p>Name </p> <p className="text-text/80 text-sm">(required)</p>
                </div>
                <div className="text-text flex flex-row gap-4">
                    <div className="w-full">
                        <p className="text-sm mb-2">First name</p>
                        <input
                            name="firstName"
                            className="w-full border border-text/70 p-2 rounded-none bg-white"
                            onChange={handleChange}
                            value={form.firstName}
                        />
                    </div>

                    <div className="text-text w-full">
                        <p className="text-sm mb-2">Last name</p>

                        <input
                            name="lastName"
                            className="w-full border border-text/70 p-2 rounded-none bg-white"
                            onChange={handleChange}
                            value={form.lastName}
                        />
                    </div>
                </div>

                <div>
                    <div className="text-text flex flex-row gap-4 items-center mb-2">
                        <p>E-mail</p>
                        <p className="text-sm text-text/80">(required)</p>
                    </div>
                    <input
                        name="email"
                        type="email"
                        className="w-full border border-text/70 p-2 rounded-none bg-white"
                        onChange={handleChange}
                        value={form.email}
                        required
                    />
                </div>

                <div>
                    <div className="text-text flex flex-row gap-4 items-center mb-2">
                        <p>Subject</p>
                        <p className="text-sm text-text/80">(required)</p>
                    </div>
                    <input
                        name="subject"
                        className="w-full border border-text/70 p-2 rounded-none bg-white"
                        onChange={handleChange}
                        value={form.subject}
                    />
                </div>


                <div>
                    <div className="text-text flex flex-row gap-4 items-center mb-2">
                        <p>Message</p>
                        <p className="text-sm text-text/80">(required)</p>
                    </div>
                    <textarea
                        name="message"
                        rows={5}
                        className="w-full border border-text/70 p-2 rounded-none bg-white"
                        onChange={handleChange}
                        value={form.message}
                        required
                    />
                </div>


                <div className="text-text text-center">
                <button
                    type="submit"
                    className="place-items-center bg-accent rounded-3xl px-4 py-2 justify-center rounded
                    hover:bg-background hover:text-primary hover:border border-accent duration-300
                    hover:scale-108 md:hover:scale-110 hover:cursor-pointer transition ease-in-out"
                >
                    Submit
                </button>
                </div>
            </form>

            {status === "success" && (
                <FadeIn y={10} duration={0.6} once={true}>
                    <p className="mt-4 px-4 py-2 bg-green-100 border border-green-300 text-center text-secondarydark rounded-md transition-all">
                        Your message was sent successfully
                    </p>
                </FadeIn>
            )}

            {status === "error" && (
                <FadeIn y={10} duration={0.6} once={true}>
                    <p className="mt-4 px-4 py-2 bg-red-100 border border-red-300 text-center text-primary rounded-md transition-all">
                        I am sorry. Seems there was an error while trying to sent your message.
                    </p>
                </FadeIn>
            )}
        </main>

    );
}