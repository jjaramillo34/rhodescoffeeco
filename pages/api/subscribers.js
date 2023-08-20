import { MongoClient } from "mongodb";
import twilio from "twilio";

export default async (req, res) => {
  const connectionString = process.env.MONGODB_URI;
  const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!client) {
    return res.status(500).send("Error connecting to database");
  } else {
    console.log("Connected to database");
  }

  const db = client.db(process.env.MONGODB_DB);
  const collection = db.collection("subscribers");

  const email = req.body.email;
  const ipAddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  // check if email is empty or not
  if (!email) {
    console.log("Email is required");
    return res.status(400).send({
      message: "Email is required",
    });
  }

  // check if email is valid
  if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
    console.log("Email is invalid");
    return res.status(400).send({
      message: "Email is invalid",
    });
  }

  // Check if the email is already in the database
  const existingemail = await collection.findOne({ email });

  if (existingemail) {
    console.log("You have already subscribed");
    return res.status(409).send({
      message: "You have already subscribed",
    });
  }

  // if email is not in the database, add it
  const result = await collection.insertOne({
    email,
    ipAddress,
    date: today,
  });

  // send a welcome email to the subscribers using SendGrid
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: "contact@rhodescoffeco.com",
    subject: "Welcome to Rhodes Coffee Co.!",

    html: `<p>Thank you for subscribing to Rhodes Coffee Co.!</p>
    <p>Stay tuned for updates on our grand opening!</p>
    <p>Best,</p>
    <p>Rhodes Coffee Co.</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
