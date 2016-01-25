$(function() {
    $('#story1').hide();
    $('#story2').hide();
    $('#less1').hide();
	

    function toggle1(){
    	$('#story1').slideToggle();
		$('#question1').hide();
		$('#less1').show();
    }

    function toggle2(){
    	$('#story2').slideToggle();
    }
	
	function lessToggle1(){
    	$('#story1').slideToggle();
		$('#question1').show();
		$('#less1').hide();
    }

    $('#question1').click(toggle1);
    $('#question2').click(toggle2);
	
	$('#less1').click(lessToggle1);

   // $('#question2').click(function() {
    //		$('#answer2').toggle();
    //	})
});