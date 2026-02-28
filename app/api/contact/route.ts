import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const resendApiKey = process.env.NEXT_RESNED_EMAIL_KEY;

        if (!resendApiKey) {
            return Response.json(
                { error: "Email service environment variables not configured" },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);
        const body = await req.json();
        const { name, email, subject, message } = body;

        // We use onboarding@resend.dev as the 'from' address by default to ensure 
        // deliverability while in Resend's sandbox mode, which only permits sending
        // to the verified account's email box.
        const data = await resend.emails.send({
            from: "Amahh Website <onboarding@resend.dev>",
            to: "amahh.tech@gmail.com",
            subject: subject || "New Website Inquiry",
            html: `
        <h2>New Inquiry from Amahh Craft</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        if (data.error) {
            console.error("Resend failed:", data.error);
            return Response.json({ error: "Failed to send email" }, { status: 500 });
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error("API error handling contact submission:", error);
        return Response.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
