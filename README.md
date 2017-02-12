<h1> AWS Hosting </h1>
<p>AWS Lambda Service With Alexa Integration</p>

<p>The configuration for Amazon's Alexa Skill developer could not be displayed, so most of the crucial data has be posted
below to give an idea of what it entailed.</p>
Name: Observation API
Application Id: amzn1.ask.skill.270bc5ce-2d9a-4147-ad52-6907954caeb4
Invocation Name: Simon (e.g. "Alexa ask Simon to ...")

Intent Schema:
{
  "intents" : [
    {
      "intent" : "Observe"
    }
  ]
}

Utterances:
    Alexa ask Simon to... (Calls Observe method)
        - look in front of me
        - scan in front of me
        - check in front of me
        - show in front of me
        - look what is in front of me
        - scan what is in front of me
        - check what is in front of me
        - show what is in front of me
        - look at what is in front of me
        - scan what is in front of me
        - read what is in front of me
        - look around me
        - scan around me
        - tell me what is around me
        - scan this
        - read this
        - identify this
        - scan that
        - read that
        - identify that
        
Example AWS Lambda Request:
    {
      "session": {
        "sessionId": "SessionId.02e68d76-bb01-4aa0-a5cf-2c1399f78c94",
        "application": {
          "applicationId": "amzn1.ask.skill.270bc5ce-2d9a-4147-ad52-6907954caeb4"
        },
        "attributes": {},
        "user": {
          "userId": "amzn1.ask.account.AHOO2Y4G64QY6X5C6BYF7C2O7BRF6KQOOPA72OIWMJ6WPDEUCO66S5QUZ7SALGHFQDDGVV3TP3FTM3FGJKXEYYGTFR4XYDG5RTEWS6MBZWLEXGUWHX6FNQNENZIWJ5BO2U6XXEYMEPQIQQ7EU2BEVH6HVRWISRJ2WC3DGPQ6UOPBY6PH73N4SBMBNG7YNBLW6Y5DGQPHMAPN7MA"
        },
        "new": true
      },
      "request": {
        "type": "IntentRequest",
        "requestId": "EdwRequestId.f9459e72-facb-4443-917b-7542a0ccdca5",
        "locale": "en-US",
        "timestamp": "2017-02-12T13:25:44Z",
        "intent": {
          "name": "Observe",
          "slots": {}
        }
      },
      "version": "1.0"
    }
    
Example Lambda Response:
    {
      "version": "1.0",
      "response": {
        "outputSpeech": {
          "type": "SSML",
          "ssml": "<speak> hmmm...I see ultramarine color, device, electronic device </speak>"
        },
        "shouldEndSession": true
      },
      "sessionAttributes": {}
    }
