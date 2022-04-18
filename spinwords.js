function spinWords(someSentence) {

    var sentence = "";
    var separate = someSentence.split(" ");
    console.log(separate);
    
    for (var i = 0; i < separate.length; i++) {
      if (sentence) sentence += ' ';
      console.log(sentence);
      if (separate[i].length >= 5) {
        sentence += separate[i].split("").reverse().join("");
      } else {
        sentence += separate[i];
      }
    }
    return sentence;
  }

  spinWords("Hey fellow warriors");