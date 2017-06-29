      //Theme: Dogs breeds//

      //Array of dog breed names//

      var dogs = [
	      "Akita",
	      'Beagle',
	      'bloodhound',
	      'boxer',
	      'bulldog',
	      'chihuahua',
	      'collie',
	      'dachshund',
	      'dalmatian',
	      'doberman',
	      'mastiff',
	      'eskimo',
	      'foxhound',
	      'greyhound',
	      'husky',
	      'labrador',
	      'maltese',
	      'papillon',
	      'pekingese',
	      'pinscher',
	      'pomeranian',
	      'poodle',
	      'pug',
	      'rottweiler',
	      'schnauzer',
	      'setter',
	      'shepherd',
	      'terrier',
      ];

      //$document.ready(function(){});

      var attemptsLeft = 7;
      var lettersGuessed = [];
      var wins = 0;
      var currentWord;
      var WrongGuess = 0;
      var wordInArray = [];
      var word = [];

      //$('#game').append('<div id="wordHolder">current word</div>');
      //$('#game').append('<div id="guesses">Letters selected:</div>');
      //$('#game').append('<div id="feedback">feedback</div>');

      // Pick the random word to guess

      var arrayLength = dogs.length;

      function getWord(){
	      var randomNumber = Math.floor(Math.random() * arrayLength);
	      currentWord = dogs[randomNumber].toLowerCase();
	      console.log('in'+currentWord);
	      wordInArray=currentWord.split("");

	      }
  		//console.log('out' + currentWord);
  		console.log(wordInArray);
  		
      // Put dashes on screen

       function dashesWord(wordLength) {
        var word = [];
        for (var i = 0; i < wordLength; i++) {
            word[i]= '_ ';
            console.log(word);
        } //end of For 
       document.getElementById("dashes").innerHTML = word;
      } //End of function

    getWord();
    console.log('out' + currentWord);
    console.log(wordInArray);
    var wordLength = wordInArray.length;
    dashesWord(wordLength);
    document.getElementById("numLetters").innerHTML = wordLength;
    document.getElementById("attempts").innerHTML = attemptsLeft;

    
   alert('press a key to start guessing'); 

    document.onkeyup = function(event) {
    	console.log(event.key);
    	var userGuess = event.key.toLowerCase();

    	position=wordInArray.indexOf(userGuess);
    	console.log('first position of the letter'+ position);

    	if (position !== -1) {
    		word[position]=userGuess.toUpperCase();
        position2=wordInArray.lastIndexOf(userGuess);
        console.log('second position of the letter'+ position2);
        if (position2 !== -1) {
        word[position2]=userGuess.toUpperCase();
        }
        document.getElementById("dashes").innerHTML = word;
    	}
      else {
        lettersGuessed.push(userGuess);
        attemptsLeft--;
        document.getElementById("attempts").innerHTML = attemptsLeft;
      }
    	
    	
    }
    