$(function() {
    $('#story1').hide();
    $('#story2').hide();

    function toggle1(){
    	$('#story1').slideToggle();
    }

    function toggle2(){
    	$('#story2').slideToggle();
    }

    $('#question1').click(toggle1);
    $('#question2').click(toggle2);

   // $('#question2').click(function() {
    //		$('#answer2').toggle();
    //	})
});