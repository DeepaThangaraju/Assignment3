var text = [
    {"firstName":"Deepa","lastName":"Thangaraju" }, 
    {"firstName":"Arun","lastName":"Kumar" },
    {"firstName":"Abishek","lastName":"Thangaraju" }];
    
    var count=text. length;
    console.log(count);
    for(var i in text){
    console.log(text[i].firstName + " " + text[i].lastName);
    }