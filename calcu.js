<script>
    $( document ).ready(function() {
        var equation = "";
        var answersArr = [];
        var numcheck = "";
        var numbers = "";
        var answer = 0;

        /*Adding attribute 'onclick' to the buttons of numbers(e.g. 0,1,2,3,4,5....) and operators(+,-,/,*)*/
        $('.button').on('click',function(){
            equation += $(this).text();
            $('#screen').html('<strong><p>'+equation+'</p></strong>');
        });


        /*Adding attribute 'onclick' to CE button that clears the screen of the calculator*/
        $('.clear').on('click',function(){
            clearall();
        });

        /*Adding attribute 'onclick' to the C button of the calculator that backspace the input in the screen*/
        $('.del').on('click',function(){
            dels();
        });

        /*Adding attribute 'onclick'to the =(equals) button of the calculator that solves the arithmetic*/
        $('.Equals').on('click',function(){
            equal();
        });

        function clearall(){
            equation = ""; // input from the calculator
            answer = 0; // initialize answer to zero
            answersArr = []; // array of answers from the input, e.g "1.2+3" >>> ["1.2","+","3"]
            numbers = ""; // combined numbers from the input e.g "1.2+3" >>> "1.2", "+", "3"
            numcheck = ""; // every character from the input
            $('#screen').html('<strong><p>0</p></strong>');
        }

        function dels(){
            equation = equation.substring(0,equation.length-1);
            $('#screen').html('<strong><p>'+equation+'</p></strong>');
            if(equation === ''){
                $('#screen').html('<strong><p>0</p></strong>'); //if continuous backspace is executed the screen is not set to empty, instead remains 0
            }
        }

        function equal(){
        /* Function that  performs all the arithmetic operations */
            for(var i = 0; i < equation.length; ++i){
                numcheck = equation.charAt(i);
                if(['1','2','3','4','5','6','7','8','9','0','.'].includes(numcheck)){
                    numbers += numcheck;
                    if(i === equation.length-1){
                        answersArr.push(numbers); //append the numbers to the answersArr array
                    }
                }else if(['+','-','*','/'].includes(numcheck)){
                    answersArr.push(numbers);  //append the numbers to the answersArr array
                    answersArr.push(numcheck); //append the operators to the answersArr array 
                    numbers = "";
                }
            }
            for(var i = 0; i < answersArr.length; ++i){ 
                if(answersArr[i]==='*' || answersArr[i]==='/'){
                    if (answersArr[i]==='*'){
                        answer = parseFloat(answersArr[i-1])*parseFloat(answersArr[i+1]);
                        answersArr.splice(answersArr.indexOf('*')-1,3,answer.toString()); /*splice the answersArr with the operator inside which is * with its operands e.g. [1,+,2,-3,*,6] will be [1,+,2,-,18]*/
                       $('#screen').html('<strong><p>'+answer.toString()+'</p></strong>');
                        answer = 0;
                        i=0; //loop will start from the beginning to check the operators * and /
                    }else if (answersArr[i]==='/'){
                        answer = parseFloat(answersArr[i-1])/parseFloat(answersArr[i+1]);
                        answersArr.splice(answersArr.indexOf('/')-1,3,answer.toString());/*splice the answersArr with the operator inside which is / with its operands e.g. [1,+,14,-3,/,6] will be [1,+,2,-,2]*/
                        $('#screen').html('<strong><p>'+answer.toString()+'</p></strong>');
                        answer = 0;
                        i=0; //loop will start from the beginning to check the operators * and /

                    }
                }
            }
            for(var i = 0; i < answersArr.length; ++i){
                if(answersArr[i]==='+' || answersArr[i]==='-'){
                    if(answersArr[i]==='+'){
                        answer = parseFloat(answersArr[i-1])+parseFloat(answersArr[i+1]);
                        answersArr.splice(answersArr.indexOf('+')-1,3,answer.toString());/*splice the answersArr with the operator inside which is + with its operands e.g. [1,+,2,-3,*,6] will be [3,-,3,*,6]*/
                        $('#screen').html('<strong><p>'+answer.toString()+'</p></strong>');
                        answer = 0;
                        --i; // since the answersArr is modified the loop must go back once
                    }else if (answersArr[i]==='-'){
                        answer = parseFloat(answersArr[i-1])-parseFloat(answersArr[i+1]);
                        answersArr.splice(answersArr.indexOf('-')-1,3,answer.toString());/*splice the answersArr with the operator inside which is - with its operands e.g. [1,+,2,-3,*,6] will be [1,+,-3,*,6]*/
                        $('#screen').html('<strong><p>'+answer.toString()+'</p></strong>');
                        answer = 0;
                        --i; // since the answersArr is modified the loop must go back once
                    }
                }
            }
            /* Returns all the variables to the normal when the equals (=) is hit */
            equation = "Ans";
            numbers = answersArr[0]; 
            numcheck = ""; 
            answer = 0;
            answersArr = [];
        }

    });

<script>

