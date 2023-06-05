import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: number;
    message: string;
};

import formData from "form-data";
import Mailgun from "mailgun.js";

const generateHtml = (message: string) => {
    return `
  <html>
  <head>
  <style type="text/css">
    span {
      text-decoration: underline;
      font-size: 11px;
    }
    p {
      font-size: 16px;
    }
  </style>
  </head>
  <body>
  <span>Dostałeś następującą wiadomość ze strony kubawarkocz.pl: </span>
  <p>${message}</p>
  </body>
  </html>
`;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === "POST") {
        const body = JSON.parse(req.body);
        if (process.env.MAILGUN_DOMAIN && process.env.MAILGUN_API_KEY && body) {
            try {
                const mailgun = new Mailgun(formData);
                const mg = mailgun.client({ username: "api", key: process.env.MAILGUN_API_KEY });

                const { status } = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
                    to: "kubaw.iluzja@gmail.com",
                    from: body.email,
                    subject: "Wiadomość ze strony kubawarkocz.pl",
                    html: generateHtml(body.message),
                });
                res.status(200).json({ status, message: "Message sent." });
            } catch (error) {
                res.status(500).send({ status: 500, message: "There was a problem with sending message. Try again." });
            }
        } else {
            res.status(500).send({ status: 500, message: "There was a problem with sending message. Try again." });
        }
    }
}
