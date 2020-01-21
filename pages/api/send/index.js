const sgMail = require('@sendgrid/mail');

import { MY_EMAIL_ADDRESS } from '../../../lib/constants';

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const {
    name,
    company,
    website,
    email,
    phone,
    startDate,
    endDate,
    budget,
    referredBy,
    message,
  } = req.body;

  const content = {
    to: MY_EMAIL_ADDRESS,
    from: email,
    subject: `website inquiry from - ${email}`,
    text: `${message}\n\nName: ${name}\nCompany: ${company}\nWebsite: ${website}\nEmail: ${email}\nPhone: ${phone}\nStart date: ${startDate}\nEnd date: ${endDate}\nBudget: ${budget}\nReferred by: ${referredBy}`,
    // html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
