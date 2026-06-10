function perfomOperation(){
    //Get user input fields
    let num1=parseInt(document.getElementById('input1').value);
    let num2=parseInt(document.getElementById('input').value);
    //check if inputs are valid numbers
    if(!isNan(num1)&&!isNaN(Num2)){
        let result = multiply(num1,num2);
        displayResult(result);
    }else{
        displayResult('Please enter valid numbers');
    }
}
 debugger;
 function multiply(a,b){
    debugger;
    
    return a*b;
 }
 function displayResult(result) {
				// Display the result in the paragraph element
				const resultElement = document.getElementById('result');
				resultElement.textContent = `The result is: ${result}`;
			}