const express = require("express");
const app = express();

require("dotenv").config({ path: "./config/.env" });

// pull in the required packages.
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");
const path = require("path");

const subscriptionKey = process.env.MS_KEY;
const serviceRegion = process.env.MS_REGION;
const filename = "YourAudioFile.wav";

//Server Setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/textToSpeech", async (req, res) => {
  try {
    // now create the audio-config pointing to our stream and
    // the speech config specifying the language.
    var audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);
    var speechConfig = sdk.SpeechConfig.fromSubscription(
      subscriptionKey,
      serviceRegion
    );

    // create the speech synthesizer.
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    // start the synthesizer and wait for a result.
    console.log("text: ", req.body);
    synthesizer.speakTextAsync(
      req.body.sendText,
      function (result) {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          console.log("synthesis finished.");
        } else {
          console.error(
            "Speech synthesis canceled, " +
              result.errorDetails +
              "\nDid you update the subscription info?"
          );
        }
        synthesizer.close();
        synthesizer = undefined;
      },
      function (err) {
        console.trace("err - " + err);
        synthesizer.close();
        synthesizer = undefined;
      }
    );
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT || 8000);
