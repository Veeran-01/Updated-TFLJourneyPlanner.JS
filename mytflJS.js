//This is my Javascript for the TFL Journey Planner

//My variables
var departurePostcode; 
var arrivalPostcode;
var choiceOption;// This is to use for my switch condition
//End of variables

//User experience 
//Takes cursor to input box
document.getElementById("depPC").focus();

//Removes google map area when they havent entered a postcode
document.getElementById("googleMap").style.display="none";

//Event listener for submit
var getJourneyData = document.getElementById("mySubmit");
getJourneyData.addEventListener("click", loadMyData, false);

/*//Event listener for switch
var switchButton = document.getElementById("mySwitch");
switchButton.addEventListener("click", switchPostcodes, false);*/


//Functions for submit

function loadMyData(){
    //alert("submit");
    //I will go and get the values of the postcodes from the users
    
    departurePostcode = document.getElementById("depPC").value;
    arrivalPostcode = document.getElementById("arrPC").value;
    
    //console.log(departurePostcode);
    //console.log(arrivalPostcode);
    
    if (departurePostcode ==="")
        {
            //Take cursor to input box again
            document.getElementById("depPC").focus();
            document.getElementById("messageD").innerHTML= "Please enter a valid departure postcode";
        }
    else if(arrivalPostcode ==="")
        {
            //Take cursor to input box again
            document.getElementById("arrPC").focus();
            document.getElementById("messageA").innerHTML= "Please enter a valid arrival postcode";
        }
    else
        {
            //AJAX BIT
            
            //Create an instance of XMLHttpRequest so you access ts properties.
             var myRequest = new XMLHttpRequest;
            
            //Need to point to TFL's JSON file and input departure and arrival postcodes into query string in URL
            myRequest.open("GET","https://api.tfl.gov.uk/journey/journeyresults/"+departurePostcode+"/to/"+arrivalPostcode, true);
            
            //Check if everythings loaded
            myRequest.onload = function()
            {
                if(myRequest.readyState == 4 && myRequest.status==200)
                    {
                        var myData = JSON.parse(myRequest.responseText);
                        
                        switch(choiceOption){
                                case(1):
                                //JS notation to get the data
                                break;
                                
                                case(2):
                                
                                break;
                                
                                default:
                                
                                break;
                        }
                        
                        console.log(myData);
                    }
            }
            
            //Need to inkoke send function
            myRequest.send();
            
            
        }
    
}






