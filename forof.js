var text = [
    {"firstName":"Deepa","lastName":"Thangaraju" }, 
    {"firstName":"Arun","lastName":"Kumar" },
    {"firstName":"Abishek","lastName":"Thangaraju" }];
    
    var count=text. length;
    console.log(count);
    for(var val of text){
    console.log(val.firstName + " " + val.lastName);
    }