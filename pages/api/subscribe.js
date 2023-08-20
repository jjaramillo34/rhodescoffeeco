import { MongoClient } from "mongodb";
import twilio from "twilio";

export default async (req, res) => {
  const connectionString = process.env.MONGODB_URI;
  const client = await MongoClient.connect(connectionString, {
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

  const phoneNumber = req.body.phoneNumber;
  const ipAddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  console.log("IP Address: " + ipAddress);

  let ip = ipAddress;

  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7);
  }

  console.log("IP Address: " + ip);
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  // check if phone number is empty or not
  if (!phoneNumber) {
    console.log("Phone number is required");
    return res.status(400).send({
      message: "Phone number is required",
    });
  }

  // check if phone number is valid in the format of +15555555555
  // check if phone number is valid U.S. format of +11234567890
  if (!phoneNumber.match(/^\+1\d{10}$/)) {
    console.log("Phone number must be in U.S. format (+11234567890)");
    return res.status(400).send({
      message: "Phone number must be in U.S. format (+11234567890)",
    });
  }

  // Check if the phone number is already in the database
  const existingSubscriber = await collection.findOne({ phoneNumber });
  if (existingSubscriber) {
    console.log("You have already subscribed");
    return res.status(409).send({
      message: "You have already subscribed",
    });
  }

  // Add the subscriber to the database
  await collection.insertOne({
    phoneNumber: phoneNumber,
    ipAddress: ipAddress,
    date: today,
  });

  // Send a confirmation message via Twilio
  //const twilioClient = twilio(
  //  process.env.TWILIO_ACCOUNT_SID,
  //  process.env.TWILIO_AUTH_TOKEN
  //);
  //twilioClient.messages.create({
  //  body: "Thank you for subscribing!. Here is a 10% discount code: RHODES10OFF. Use it at checkout!. Unsubscribe at any time by replying STOP.",
  //  from: process.env.TWILIO_PHONE_NUMBER,
  //  to: phoneNumber,
  //});

  // Return a success response to the user
  return res.status(200).send({
    message: "You have been subscribed successfully!",
  });
};
