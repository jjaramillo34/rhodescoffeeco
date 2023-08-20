import emailjs from "@emailjs/browser";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(422).json({ error: "Missing name, email, or message." });
  }

  try {
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    console.log(templateParams);

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;
    const userID = process.env.EMAILJS_USER_ID;

    console.log(serviceID, templateID, userID);

    await emailjs.send(serviceID, templateID, templateParams, userID);

    res.status(200).json({ status: "Message sent successfully!" });
    alert("Message sent successfully!");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "An error occurred while sending the message." });
  }
};
