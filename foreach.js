var text = [
    {"firstName":"Deepa","lastName":"Thangaraju" }, 
    {"firstName":"Arun","lastName":"Kumar" },
    {"firstName":"Abishek","lastName":"Thangaraju" }];
    text.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
          console.log(`${key} ${value}`);
        });
    });
    
   