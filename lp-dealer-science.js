//Project Name: Coding Challenge
//Client Name: Dealer Science
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///

/*  INSTRUCTIONS:
Please write a PHP or JavaScript function that finds the longest substring
in a provided string without going over the limit of unique characters.

Input:
1. string of characters (String)
2. number of unique characters (Integer)

Output:
Longest substring - starting position

Example:
-----------------------------------------------------------------
1. dgfddsssdsfdffdfdfadfhheedsfdfcdfdxffdh
2. N = 2

Output:
-----------------------------------------------------------------
fdffdfdf - 10 (zero based starting index)

Important: Attach your answer to your reply as a PHP file
(code put directly into the email reply often gets garbled).

*/
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///


function checkSubString(string, limit){
    let result = string.substring(0,limit);
    console.log(result);
}

checkSubString(saajsdfhjghjkgjhjghjhsdjfhalksdjhfivh,3);
