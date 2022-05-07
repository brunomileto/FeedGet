import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4d03985f35da6c",
    pass: "5850a7e3affbe4",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const feedback = transport.sendMail({
      from: "Equipe FeedGet <oi@feedget.com>",
      to: "Bruno Mileto <brunomilet@outlook.com>",
      subject: subject,
      html: body,
    });
  }
}
