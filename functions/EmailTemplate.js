const generateNotificationTemplate = (name, email, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Message</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
    
    <!-- Header -->
    <div style="background-color: #000e22; color: #fff; padding: 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 20px;">📩 New Message Received</h1>
    </div>
    
    <!-- Body -->
    <div style="padding: 20px; color: #333;">
      <h2 style="margin-top: 0; font-size: 18px;">From: ${name}</h2>
      <p style="margin: 5px 0; font-size: 14px; color: #666;">
        Email: <a href="mailto:${email}" style="color: #000e22;">${email}</a>
      </p>
      
      <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #000e22;">
        <p style="margin: 0; line-height: 1.5; color: #555;">${message}</p>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f1f1f1; color: #777; text-align: center; padding: 12px; font-size: 13px;">
      <p style="margin: 0;">This message was sent via your portfolio contact form.</p>
    </div>
  </div>
</body>
</html>
`;

const generateSubscriptionTemplate = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thanks for Subscribing Tesin Thomas</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
    
    <!-- Header -->
    <div style="background-color: #000e22; color: #fff; padding: 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 22px;">Thank You for Reaching Out!</h1>
    </div>
    
    <!-- Body -->
    <div style="padding: 20px;">
      <h2 style="margin-top: 0; color: #333;">Hi ${name},</h2>
      <p style="line-height: 1.6; color: #555;">
        I’ve received your message and I’ll get back to you as soon as possible.  
        I truly appreciate you taking the time to connect.
      </p>
      
      <p style="line-height: 1.6; color: #555;">
        In the meantime, feel free to explore my portfolio and see some of my recent projects.
      </p>

      <div style="margin: 20px 0; text-align: center;">
        <a href="${process.env.APP_URL}" 
           target="_blank" 
           style="background-color: #000e22; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; display: inline-block;">
          Visit My Portfolio
        </a>
      </div>

      <p style="line-height: 1.6; color: #555;">Best regards,</p>
      <p style="line-height: 1.6; color: #555;">Tesin Thomas</p>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f1f1f1; color: #777; text-align: center; padding: 12px; font-size: 13px;">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Tesin Thomas. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

module.exports = {
  generateNotificationTemplate,
  generateSubscriptionTemplate,
};
