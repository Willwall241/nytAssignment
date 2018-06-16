//Declare variables

var searchTerm;
var startYear;
var endYear;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
    'api-key': "af30c4e1ec2b48699b542b06eded25d9",
    'q': searchTerm,
    'begin_date': startYear,
    'end_date': endYear
});

//create ajax GET method
// add the then function
// grab the data value of search box for searchTerm var
// grab the data value of start year box for startYear var
// "     "    "    "    "  end  year  "   "  endYear var

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)

});

$("search-btn").on("click", function() {

    //Empty the articles div

    //Set variables for search terms
    searchTerm = $("search-term-box").val();
    startYear = $("start-year-box").val();
    endYear = $("end-year-box").val();
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
        //capture the result
        
        //for loop that goes through based on amount of articles
        for (var i=0; i < response.docs.length; i++) {
            //append articles to the DOM
            

            
            $("#").append(searchTerm)
            $("#").append(startYear)
            $("#").append(endYear)a
            
        









        }

      });
});


