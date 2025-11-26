import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const body = await request.json();

    const { firstName, lastName, email, subject, message } = body;


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.MAIL_USER,
        subject: `Subject: ${subject}`,
        text: `
        First name: ${firstName}
        Last name: ${lastName}
        E-mail: ${email}
        
        Message:
        ${message}
            `,
            };

    try {
        await transporter.sendMail(mailOptions);
        return Response.json({ success: true });
    } catch (error) {
        console.log(error);
        return new Response("Error sending email", { status: 500 });
    }
}
