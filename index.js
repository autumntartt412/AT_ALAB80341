



let file = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let rows = file.split('\n'); 

let columns = [];

for (let i = 0; i < rows.length; i++) {

    columns.push(rows[i].split (','));
 if (i === 3) {
 


let chart = Object.fromEntries(columns.map((value, index) => [index, value]));

   
      console.log(chart);
    }}


    
  

   
  







