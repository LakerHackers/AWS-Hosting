/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * Observation API gets from a REST API for a message
 * with a description which will be parsed out and
 * sent to Alexa Skills Custom - "Observation API"
 **/
// arn:aws:lambda:us-east-1:822556179699:function:youtubeDataAPIAlexaSkill
'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.270bc5ce-2d9a-4147-ad52-6907954caeb4";

var locale;

const languageStrings = {
    'en-GB': {
        translation: {
            HELP_MESSAGE: 'You can say scan this or what\'s around me... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            HELP_MESSAGE: 'You can say scan this or what\'s around me... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'de-DE': {
        translation: {
            HELP_MESSAGE: 'Du kannst sagen, Scannen Sie diese oder was ist um mich herum... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('Observe');
    },
    'Observe': function observe() {
        const http = require('http');
        let getFunc = (res) => {
            // console.log("Got response: " + res.statusCode);

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => rawData += chunk);
            res.on('end', () => {
                try {
                    console.log(rawData);
                    this.emit(':tell', "hmmm..." + rawData);   
                } catch (e) {
                    console.log(e.message);
                }
            });
        };
        let getFunc2 = () => {
            const speechOutput = "I'm sorry, but I failed to get a message back from my server.";
            this.emit(':tell', speechOutput);
        };
        // -----------------------------Adjust ngrok proxy here!-----------------------------------
        http.get("http://341778e3.ngrok.io/search?language=" + locale, getFunc).on('error', getFunc2);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    locale = event.request.locale;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
