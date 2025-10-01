import { Resend } from "resend";

const resend = new Resend(process.env.REACT_APP_EMAIL_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, email, subject, serviceType, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const htmlContent = `
      <h2>NEW FORM SUBMISSION</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service Type:</strong> ${serviceType || "Not specified"}</p>
      <p><strong>Subject:</strong> ${subject || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    const result = await resend.emails.send({
      from: "mail.leyvanightlaw.com",
      to: ["caleb.n.dickson@gmail.com"],
      reply_to: email,
      subject: `NEW FORM SUBMISSION: ${subject || serviceType || "New Message"}`,
      html: htmlContent,
    });

    /*await resend.batch.send([
      {
        from: email,
        to: ["calebdksn@gmail.com"],
        reply_to: email,
        subject: `NEW FORM SUBMISSION: ${subject || serviceType || "New Message"}`,
        html: htmlContent,
      },
      {
        from: email,
        to: ["caleb.n.dickson@gmail.com"],
        reply_to: email,
        subject: `NEW FORM SUBMISSION: ${subject || serviceType || "New Message"}`,
        html: htmlContent,
      },
    ]);*/

    return res.status(200).json({ id: result.id });
  } catch (err) {
    console.error("Email sending error:", err);
    return res.status(500).json({ error: err.message || "Failed to send" });
  }
}
