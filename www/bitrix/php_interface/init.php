<?
/*
You can place here your functions and event handlers

AddEventHandler("module", "EventName", "FunctionName");
function FunctionName(params)
{
	//code
}
*/

function test_dump($arg){
    global $USER;
    if($USER->IsAdmin()){
        echo '<pre>';
        var_dump($arg);
        echo '</pre>';

    }
}
?>