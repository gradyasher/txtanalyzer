// function
	// get word count
		// split string
		// loop to counter
		// return counter val
	// get unique word count
		// count word freq
		// count all < 2
		// return counter val
	// get avg word lngth
		// get word lngth sum
		// div by array length
		// return result




$(function() {
	
	
	$('form').submit(function(event){
		event.preventDefault()
		var text = $('#user-text').val()
		

		var stripped = text.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");

        var noSpace = stripped.replace(/ /g, "").length

  		var splitWords = stripped.split(' ');

  		var numWords = splitWords.length

  		var avgWord = (noSpace / numWords).toFixed(2)

		var obj = {}
  
	  	for(var i = 0; i < splitWords.length; i++) {
	      var word = splitWords[i]
	      if(!obj[word]) {
	        obj[word] = 1
	      }
	      else {
	        obj[word]++
	      }
	  	}

	  var uniqueWords = Object.keys(obj).length

	// update the dom with our values

		$('.text-report').show()
		$('.num-words').text(numWords)
		$('.unique-words').text(uniqueWords)
		$('.avg-words').text(avgWord)
	})
})