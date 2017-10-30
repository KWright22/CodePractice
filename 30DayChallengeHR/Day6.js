function processData(input) {
    //Enter your code here
    var evenArray = '';
    var oddArray = '';
    var input = input.split('\n');
    
    
    for (j = 1; j < input.length; j++) {
        var word = input[j];
        for (i = 0; i < word.length; i++) {
            if ((i == 0) || (i % 2 == 0)) {
               evenArray += word[i];
            } else {         
               oddArray += word[i];
            }        
        }
        console.log(evenArray + ' '  + oddArray);
        evenArray = [];
        oddArray = [];
    }   
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});