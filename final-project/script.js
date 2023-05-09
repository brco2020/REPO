$(document).ready(function(){
  
	$('#message').html("");
	var dig_1 = 0;
	var dig_2 = 0;
	var dig_4 = 0;
	var dig_8 = 0;
	var dig_16 = 0;
	var dig_32 = 0;
	var dig_64 = 0;
	var dig_128 = 0;	
	
	var flipcard_names = ["#digit1", "#digit2", "#digit4", "#digit8", "#digit16", "#digit32", "#digit64", "#digit128"];
	var dot_place = ['#place1', '#place2', '#place4', '#place8', '#place16', '#place32', '#place64', '#place128']
	for ( var i = 0; i < 8; i++ ) {	
		$(flipcard_names[i]).html("0");
		$(dot_place[i]).fadeTo( "slow", 0.1 );
		}
		
			
	$("#digit1").click(function() {
		if (dig_1 == 0){
			dig_1 = 1;
			$('#digit1').html("1");
			$('#calc1').html("1");
			$('#place1').fadeTo( "slow", 1 );
		}
		else {
			dig_1 = 0;
			$('#digit1').html("0");
			$('#calc1').html("0");
			$('#place1').fadeTo( "slow", 0.1 );
		}
		update_message();
	});
			
			
				$("#digit2").click(function() {
		if (dig_2 == 0){
			dig_2 = 1;
			$('#digit2').html("1");
			$('#calc2').html("2");
			$('#place2').fadeTo( "slow", 1 );
		}
		else {
			dig_2 = 0;
			$('#digit2').html("0");
			$('#calc2').html("0");
			$('#place2').fadeTo( "slow", 0.1 );
			}
		update_message();
	});
	
		$("#digit4").click(function() {
		if (dig_4 == 0){
			dig_4 = 1;
			$('#digit4').html("1");
			$('#calc4').html("4");
			$('#place4').fadeTo( "slow", 1 );
		}
		else {
			dig_4 = 0;
			$('#digit4').html("0");
			$('#calc4').html("0");
			$('#place4').fadeTo( "slow", 0.1 );
		}
		update_message();
	});
			
			
				$("#digit8").click(function() {
		if (dig_8 == 0){
			dig_8 = 1;
			$('#digit8').html("1");
			$('#calc8').html("8");
			$('#place8').fadeTo( "slow", 1 );			
		}
		else {
			dig_8 = 0;
			$('#digit8').html("0");
			$('#calc8').html("0");
			$('#place8').fadeTo( "slow", 0.1 );			
		}
		update_message();
	});
			
	$("#digit16").click(function() {
		if (dig_16 == 0){
			dig_16 = 1;
			$('#digit16').html("1");
			$('#calc16').html("16");
			$('#place16').fadeTo( "slow", 1 );
		}
		else {
			dig_16 = 0;
			$('#digit16').html("0");
			$('#calc16').html("0");
			$('#place16').fadeTo( "slow", 0.1 );
		}update_message();
	});
			
			
	$("#digit32").click(function() {
		if (dig_32 == 0){
			dig_32 = 1;
			$('#digit32').html("1");
			$('#calc32').html("32");
			$('#place32').fadeTo( "slow", 1 );
		}
		else {
			dig_32 = 0;
			$('#digit32').html("0");
			$('#calc32').html("0");
			$('#place32').fadeTo( "slow", 0.1 );
		}update_message();
	});	

	
	$("#digit64").click(function() {
		if (dig_64 == 0){
			dig_64 = 1;
			$('#digit64').html("1");
			$('#calc64').html("64");
			$('#place64').fadeTo( "slow", 1 );
		}
		else {
			dig_64 = 0;
			$('#digit64').html("0");
			$('#calc64').html("0");
			$('#place64').fadeTo( "slow", 0.1 );
		}update_message();
	});	
	
	
	$("#digit128").click(function() {
		if (dig_128 == 0){
			dig_128 = 1;
			$('#digit128').html("1");
			$('#calc128').html("128");
			$('#place128').fadeTo( "slow", 1 );
		}
		else {
			dig_128 = 0;
			$('#digit128').html("0");
			$('#calc128').html("0");
			$('#place128').fadeTo( "slow", 0.1 );
		}update_message();
	});	
		
	$("#divide2").click(function() {
		if (dig_1 == 0){
			dig_1 = dig_2; 		$('#digit1').html(dig_1);		$('#calc1').html(1*dig_1);			$('#place1').fadeTo( "slow", 0.1 + 0.9 *dig_1 );
			dig_2 = dig_4; 		$('#digit2').html(dig_2);		$('#calc2').html(2*dig_2);			$('#place2').fadeTo( "slow", 0.1 + 0.9 *dig_2 );
			dig_4 = dig_8; 		$('#digit4').html(dig_4);		$('#calc4').html(4*dig_4);			$('#place4').fadeTo( "slow", 0.1 + 0.9 *dig_4 );	
			dig_8 = dig_16; 	$('#digit8').html(dig_8);		$('#calc8').html(8*dig_8); 			$('#place8').fadeTo( "slow", 0.1 + 0.9 *dig_8 );
			dig_16 = dig_32; 	$('#digit16').html(dig_16);		$('#calc16').html(16*dig_16); 		$('#place16').fadeTo( "slow", 0.1 + 0.9 *dig_16 );
			dig_32 = dig_64; 	$('#digit32').html(dig_32);		$('#calc32').html(32*dig_32);		$('#place32').fadeTo( "slow", 0.1 + 0.9 *dig_32 );
			dig_64 = dig_128; 	$('#digit64').html(dig_64);		$('#calc64').html(64*dig_64);		$('#place64').fadeTo( "slow", 0.1 + 0.9 *dig_64 );
			dig_128 = 0; 		$('#digit128').html(dig_128); 	$('#calc128').html(128*dig_128);	$('#place128').fadeTo( "slow", 0.1 + 0.9 *dig_128 );
			
		}

		update_message();
	});	

	$("#times2").click(function() {
		if (dig_128 == 0){
			dig_128 = dig_64; 	$('#digit128').html(dig_128); 	$('#calc128').html(128*dig_128);	$('#place128').fadeTo( "slow", 0.1 + 0.9 *dig_128 );
			dig_64 = dig_32; 	$('#digit64').html(dig_64);		$('#calc64').html(64*dig_64);		$('#place64').fadeTo( "slow", 0.1 + 0.9 *dig_64 );
			dig_32 = dig_16; 	$('#digit32').html(dig_32);		$('#calc32').html(32*dig_32);		$('#place32').fadeTo( "slow", 0.1 + 0.9 *dig_32 );
			dig_16 = dig_8; 	$('#digit16').html(dig_16);		$('#calc16').html(16*dig_16); 		$('#place16').fadeTo( "slow", 0.1 + 0.9 *dig_16 );
			dig_8 = dig_4; 		$('#digit8').html(dig_8);		$('#calc8').html(8*dig_8); 			$('#place8').fadeTo( "slow", 0.1 + 0.9 *dig_8 );
			dig_4 = dig_2; 		$('#digit4').html(dig_4);		$('#calc4').html(4*dig_4);			$('#place4').fadeTo( "slow", 0.1 + 0.9 *dig_4 );	
			dig_2 = dig_1; 		$('#digit2').html(dig_2);		$('#calc2').html(2*dig_2);			$('#place2').fadeTo( "slow", 0.1 + 0.9 *dig_2 );
			dig_1 = 0; 			$('#digit1').html(dig_1);		$('#calc1').html(1*dig_1);			$('#place1').fadeTo( "slow", 0.1 + 0.9 *dig_1 );
			
		}

		update_message();
	});	

		
	
	
	
	
	
	
	update_message();
	
	
function update_message(){		
		total = dig_128*128 + dig_64*64 + dig_32*32 + dig_16*16 + dig_8*8 + dig_4*4 + dig_2*2 + dig_1; 	
		$('#message').html("= " + total);
		
	}		
		}
  
)
