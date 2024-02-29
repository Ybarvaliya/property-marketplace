import express from "express";
import connectToMongo from "./config/db.js";
import cors from "cors";
import Email from "./Models/emailModel.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

connectToMongo();

app.get('/', (req, res) =>{
  res.send("hello")
})

app.post("/email", async (req, res) => {
  const { email } = req.body;

  try {
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).send("Email already exists");
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    res.send("Email saved successfully");
  } catch (error) {
    console.error("Error saving email:", error.message);
    res.status(500).send("Error saving email");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
