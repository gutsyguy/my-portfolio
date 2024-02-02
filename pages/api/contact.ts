import nodemailer from 'nodemailer';
import next, { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log(req.body)
    const user = process.env.user;
    const pass = process.env.pass

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass
      }
    });

    try {
      const mail = await transporter.sendMail({
        from: user,
        to: user,
        replyTo: email,
        subject: `Form submission from ${name}`,
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `
      });

      console.log('Message was sent:', mail.messageId);
      return res.status(200).json({ message: 'success' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Could not send email. Your message was not sent." });
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
}