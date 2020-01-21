import { MY_EMAIL_ADDRESS } from '../../../lib/constants';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
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
  } = JSON.parse(req.body);

  try {
    const msg = {
      to: MY_EMAIL_ADDRESS,
      from: email,
      subject: `ciccarel.li: project inquiry from ${name}`,
      text: `${message}\n\nName: ${name}\nCompany: ${company}\nWebsite: ${website}\nEmail: ${email}\nPhone: ${phone}\nStart date: ${startDate}\nEnd date: ${endDate}\nBudget: ${budget}\nReferred by: ${referredBy}`,
    };
    sgMail.send(msg);

    res.status(200).json({ succces: 1, message: 'Message sent successfully!' });
  } catch (e) {
    res.status(404).json({ error: 'Error sending form.' });
  }
};
