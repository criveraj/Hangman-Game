      //Theme: Dogs breeds//

      //Array of dog breed names//

      var dogs = [
	      "Akita",
	      "Alaskan",
	      'Beagle',
	      'Bloodhound',
	      'Boxer',
	      'Bulldog',
	      'Chihuahua',
	      'Chow Chow',
	      'Collie',
	      'Dachshund',
	      'Dalmatian',
	      'Doberman',
	      'Mastiff',
	      'Eskimo',
	      'Foxhound',
	      'Greyhound',
	      'Husky',
	      'Labrador',
	      'Maltese',
	      'Papillon',
	      'Pekingese',
	      'Pinscher',
	      'Pit Bull',
	      'Pomeranian',
	      'Poodle',
	      'Pug',
	      'Rottweiler',
	      'Schnauzer',
	      'Setter',
	      'Shepherd',
	      'Terrier',
      ];

      //$document.ready(function(){});

      var attemptsLeft = 7;
      var lettersGuessed = [];
      var wins = 0;
      var currentWord;
      var WrongGuess = 0;
      var wordInArray = [];

      //$('#game').append('<div id="wordHolder">current word</div>');
      //$('#game').append('<div id="guesses">Letters selected:</div>');
      //$('#game').append('<div id="feedback">feedback</div>');

      // Pick the random word to guess

      var arrayLength = dogs.length;

      function getWord(){
	      var randomNumber = Math.floor(Math.random() * arrayLength);
	      currentWord = dogs[randomNumber];
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
    
   alert('press a key to start guessing'); 

    document.onkeyup = function(event) {
    	console.log(event.key);
    	var userGuess = event.key;
    	position=wordInArray.indexOf(userGuess);
    	console.log('first position of the letter'+ position);

    	if (position !== -1) {
    		word[position]=userGuess;
        position2=wordInArray.lastIndexOf(userGuess);
        console.log('second position of the letter'+ position2);
        if (position2 !== -1) {
        word[position2]=userGuess;
        }
        document.getElementById("dashes").innerHTML = word;
    	}
      else {
        lettersGuessed.push(userGuess);
        attemptsLeft--;
        document.getElementById("attempts").innerHTML = attemptsLeft;
      }
    	
    	
    }
    