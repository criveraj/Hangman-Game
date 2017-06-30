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
      var indices = [];

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
  		  		
      // Put dashes on screen

       function dashesWord(wordLength) {
        var word = [];
        for (var i = 0; i < wordLength; i++) {
            word[i]= "_";
            console.log(word);
        } //end of For 
       document.getElementById("dashes").innerHTML = word;
      } //End of function

      function AllOcurrences(wordInArray,userGuess) {
        var idx = wordInArray.indexOf(userGuess);
        while (idx != -1) {
        indices.push(idx);
        word[idx]=userGuess.toUpperCase();
        document.getElementById("dashes").innerHTML = word;
        idx = wordInArray.indexOf(userGuess, idx + 1);
        } // End of While

        console.log("The letter" + userGuess +" is in positions: " + indices);
        document.getElementById("dashes").innerHTML = word;

        if (idx === -1 && attemptsLeft > 0) {
          attemptsLeft--;
          document.getElementById("attempts").innerHTML = attemptsLeft;
        } // End of if

      }// End of function AllOcurrences


// Starts the main part

    getWord();
    console.log('the word to guess is' + currentWord);
    console.log(wordInArray);
    var wordLength = wordInArray.length;
    dashesWord(wordLength);
    document.getElementById("numLetters").innerHTML = wordLength;
    document.getElementById("attempts").innerHTML = attemptsLeft;

    
   alert('press a key to start guessing'); 

    document.onkeyup = function(event) {
    	console.log(event.key);
    	var userGuess = event.key.toLowerCase();
      lettersGuessed.push(userGuess);
      document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

      AllOcurrences(wordInArray,userGuess);


    // Initial version to test step by step

    /*	position=wordInArray.indexOf(userGuess);
    	console.log('first position of the letter'+ position);

      	if (position !== -1) {
      		word[position]=userGuess.toUpperCase();
          position2=wordInArray.lastIndexOf(userGuess);
          console.log('second position of the letter'+ position2);
          if (position2 !== -1) {
          word[position2]=userGuess.toUpperCase();
          } // End if within
          document.getElementById("dashes").innerHTML = word;
      	} End if
        else {
          attemptsLeft--;
          document.getElementById("attempts").innerHTML = attemptsLeft;
        } // End Else*/
    	
    	

    } // End onkeyup event
    