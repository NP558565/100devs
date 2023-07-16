// status fields and start button in UI
var phraseDiv;
var startRecognizeOnceAsyncButton;

// subscription key and region for speech services.
var subscriptionKey,
  serviceRegion,
  languageTargetOptions,
  languageSourceOptions;
var SpeechSDK;
var recognizer;

document.addEventListener("DOMContentLoaded", function () {
  startRecognizeOnceAsyncButton = document.getElementById(
    "startRecognizeOnceAsyncButton"
  );
  subscriptionKey = document.getElementById("subscriptionKey");
  serviceRegion = document.getElementById("serviceRegion");
  languageTargetOptions = document.getElementById("languageTargetOptions");
  languageSourceOptions = document.getElementById("languageSourceOptions");
  phraseDiv = document.getElementById("phraseDiv");

  startRecognizeOnceAsyncButton.addEventListener("click", function () {
    startRecognizeOnceAsyncButton.disabled = true;
    phraseDiv.innerHTML = "";

    if (
      subscriptionKey.value === "" ||
      subscriptionKey.value === "subscription"
    ) {
      alert(
        "Please enter your Microsoft Cognitive Services Speech subscription key!"
      );
      startRecognizeOnceAsyncButton.disabled = false;
      return;
    }
    var speechConfig = SpeechSDK.SpeechTranslationConfig.fromSubscription(
      subscriptionKey.value,
      serviceRegion.value
    );

    speechConfig.speechRecognitionLanguage = languageSourceOptions.value;
    let language = languageTargetOptions.value;
    speechConfig.addTargetLanguage(language);

    var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    recognizer = new SpeechSDK.TranslationRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync(
      function (result) {
        startRecognizeOnceAsyncButton.disabled = false;
        let translation = result.translations.get(language);
        window.console.log(translation);
        phraseDiv.innerHTML += translation;

        recognizer.close();
        recognizer = undefined;
      },
      function (err) {
        startRecognizeOnceAsyncButton.disabled = false;
        phraseDiv.innerHTML += err;
        window.console.log(err);

        recognizer.close();
        recognizer = undefined;
      }
    );
  });

  if (!!window.SpeechSDK) {
    SpeechSDK = window.SpeechSDK;
    startRecognizeOnceAsyncButton.disabled = false;

    document.getElementById("content").style.display = "block";
    document.getElementById("warning").style.display = "none";
  }
});

document.querySelector("#getText").addEventListener("click", textToSpeech);

async function textToSpeech() {
  try {
    const contentFromTextArea = document.querySelector("#phraseDiv").value;

    const response = await fetch("textToSpeech", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sendText: contentFromTextArea,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
