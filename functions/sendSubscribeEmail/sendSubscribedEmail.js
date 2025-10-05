require("dotenv").config();
const nodemailer = require("nodemailer");
const {
  generateSubscriptionTemplate,
} = require("../sendEmail/EmailTemplate.js");

exports.handler = async (event) => {
  try {
    const { firstName, lastName, email } = JSON.parse(event.body);

    if (!firstName || !lastName || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Missing required fields",
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    // Send welcome email only
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Subscribed!",
      html: generateSubscriptionTemplate(firstName),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "success",
        message: "Subscribed successfully!",
      }),
    };
  } catch (err) {
    console.error("Subscription error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "error", error: err.message }),
    };
  }
};
