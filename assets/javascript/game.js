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
      var win = 0;
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
      console.log('list of dogs' + arrayLength);

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
        if ((idx === -1) && (attemptsLeft > 0)) {
          attemptsLeft--;
          document.getElementById("attempts").innerHTML = attemptsLeft;
        } // End of if

        while (idx != -1) {
        indices.push(idx);
        word[idx]=userGuess.toUpperCase();
        document.getElementById("dashes").innerHTML = word;
        idx = wordInArray.indexOf(userGuess, idx + 1);
        } // End of While

        console.log("The letter" + userGuess +" is in positions: " + indices);
        document.getElementById("dashes").innerHTML = word;
        console.log('idx is' + idx);

        
        
                
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
 
      
      if (attemptsLeft === 0) {
        alert('You have run out of attempts, please try again');
        attemptsLeft = 7;
        location.reload();
      };

    	if (indices.length == wordInArray.length) {
          document.getElementById("dashes").innerHTML = word;
          win++;
          document.getElementById("win").innerHTML = win;
          setTimeout('', 5000);
          alert('Good Job!!!  You won');
          location.reload();
          }
    	

    } // End onkeyup event
    