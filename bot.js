var twit = require('twit');
var config = require('./config.js');
var lyrics = require('./lyrics.js');

var Twitter = new twit(config);

var statusToPost = generateStatus();

var post = function() {
    Twitter.post('statuses/update', { status: statusToPost }, function(err, data, response) {
        console.log(data)
      });
}

post();

setInterval(post, 3000000);


function generateStatus() { 
    var sentenceArray = lyrics.songSentenceList();
    var singularNouns = lyrics.nounsSingularList();
    var pluralNouns = lyrics.nounsPluralList();
    var seasons = lyrics.seasonsList();
    var adjectives = lyrics.adjectivesList();
    var verbs = lyrics.verbsList();
    var verbsPastTense = lyrics.verbsPastTenseList();
    var colors = lyrics.colorsList();
    var places = lyrics.placesList();
    var people = lyrics.peopleList();
    var exclamations = lyrics.exclamationsList();
    var bodyparts = lyrics.bodyPartsList();
    var bodypartsSingular = lyrics.bodyPartsSingularList();
    var clothingItems = lyrics.clothingItemsList();
    var verbsPresentParticiple = lyrics.verbsPresentParticipleList();
    var properNounsSingular = lyrics.properNounsSingularList();
    var foodAndDrinks = lyrics.foodAndDrinksList();
    var nounArticles = lyrics.nounArticlesList();


    console.log(sentenceArray);
    var sentenceTemplate = sentenceArray[Math.floor(Math.random() * sentenceArray.length)];

    if (sentenceTemplate) {
        var tastes = foodAndDrinks.concat(pluralNouns).concat(people).concat(properNounsSingular);
        var sentenceTemplate = sentenceTemplate.replace("[taste]", tastes[Math.floor(Math.random() * tastes.length)]);
    }

    var sentenceTemplate = sentenceTemplate.replace("[noun]", singularNouns[Math.floor(Math.random() * singularNouns.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[nounarticle]", nounArticles[Math.floor(Math.random() * nounArticles.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[nouns]", pluralNouns[Math.floor(Math.random() * pluralNouns.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[adjective]", adjectives[Math.floor(Math.random() * adjectives.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[verb]", verbs[Math.floor(Math.random() * verbs.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[verbed]", verbsPastTense[Math.floor(Math.random() * verbsPastTense.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[place]", places[Math.floor(Math.random() * places.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[exclamation]", exclamations[Math.floor(Math.random() * exclamations.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[bodypart]", bodyparts[Math.floor(Math.random() * bodyparts.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[bodypartsingular]", bodypartsSingular[Math.floor(Math.random() * bodypartsSingular.length)]);
    var sentenceTemplate = sentenceTemplate.replace("[clothing]", clothingItems[Math.floor(Math.random() * clothingItems.length)]);


    var regex = /[season]/gi, result, seasonIndices = [];
    while ( (result = regex.exec(sentenceTemplate)) ) {
        seasonIndices.push(result.index);
    }

    for (i = 0; i < seasonIndices.length; i++) {
        var sentenceTemplate = sentenceTemplate.replace("[season]", seasons[Math.floor(Math.random() * seasons.length)]);
    }
    
    var regex = /[person]/gi, result, personIndices = [];
    while ( (result = regex.exec(sentenceTemplate)) ) {
        personIndices.push(result.index);
    }

    for (i = 0; i < personIndices.length; i++) {
        var sentenceTemplate = sentenceTemplate.replace("[person]", people[Math.floor(Math.random() * people.length)]);
    }

    var regex = /[clothing]/gi, result, clothingIndices = [];
    while ( (result = regex.exec(sentenceTemplate)) ) {
        clothingIndices.push(result.index);
    }

    for (i = 0; i < clothingIndices.length; i++) {
        var sentenceTemplate = sentenceTemplate.replace("[clothing]", clothingItems[Math.floor(Math.random() * clothingItems.length)]);
    }

    var regex = /[noun]/gi, result, nounIndices = [];
    while ( (result = regex.exec(sentenceTemplate)) ) {
        nounIndices.push(result.index);
    }

    for (i = 0; i < nounIndices.length; i++) {
        var sentenceTemplate = sentenceTemplate.replace("[noun]", singularNouns[Math.floor(Math.random() * singularNouns.length)]);
    }

    var regex = /[verbing]/gi, result, verbPluralIndices = [];
    while ( (result = regex.exec(sentenceTemplate)) ) {
        verbPluralIndices.push(result.index);
    }

    for (i = 0; i < verbPluralIndices.length; i++) {
        var sentenceTemplate = sentenceTemplate.replace("[verbing]", verbsPresentParticiple[Math.floor(Math.random() * verbsPresentParticiple.length)]);
    }

    var regex = /[color]/gi, result, colorIndices = [];
    while ( (result = regex.exec(sentenceTemplate)) ) {
        colorIndices.push(result.index);
    }

    for (i = 0; i < colorIndices.length; i++) {
        var sentenceTemplate = sentenceTemplate.replace("[color]", colors[Math.floor(Math.random() * colors.length)]);
    }

    

    sentenceTemplate = sentenceTemplate.charAt(0).toUpperCase() + sentenceTemplate.slice(1);

    return sentenceTemplate;
} 