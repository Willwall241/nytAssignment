//Declare variables
var articleCounter = 0;
var numResults = 0
var searchTerm = "";
var startYear = 0;
var endYear = 0;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
    'api-key': "af30c4e1ec2b48699b542b06eded25d9",
    'q': searchTerm,
});

//create ajax GET method
// add the then function
// grab the data value of search box for searchTerm var
// grab the data value of start year box for startYear var
// "     "    "    "    "  end  year  "   "  endYear var


$("#run-search").on("click", function() {

    //Empty the articles div
    event.preventDefault();
    //Set variables for search terms
    searchTerm = $("search-term").val();
    startYear = $("start-year").val();
    endYear = $("end-year").val();
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
        //capture the result
        
        //for loop that goes through based on amount of articles
        for (var i=0; i < response.response.docs.length; i++) {
            //append articles to the DOM
            var newDiv = $("<div>")
            newDiv.text(response.response.docs[i].headline.main)

            
            $("#result-section").append(newDiv)
            
        









        }

      });
});


