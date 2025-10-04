require("dotenv").config();

const nodemailer = require("nodemailer");
const {
  generateWelcomeTemplate,
  generateNotificationTemplate,
} = require("./EmailTemplate.js");

exports.handler = async (event) => {
  console.log("Event: ", event);
  const { firstName, lastName, email, message } = JSON.parse(event.body);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    // Send email
    await Promise.all([
      transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Thanks for contacting",
        html: generateWelcomeTemplate(`${firstName} ${lastName}`),
      }),
      transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `New message from ${firstName} ${lastName}`,
        html: generateNotificationTemplate(firstName, email, message),
      }),
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Message sent successfully",
      }),
    };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
