$(document).ready(function(){
	$("#submit").click(function(){
		var input = $("#input_txt").val();

		var result = decode_special(input);
		$("#output").html(JSON.stringify(result.payload));
	})
});

function decode_special(input){
	var arr = {'%257B': '{',
	'%257D': '}',
	'%2522': '"',
	'%253A': ':',
	'%252C': ',',
	'%255B': '[',
	'%255D': ']',
	'%2520': ' ', 
	'%2526': '&',
	'%2F': '/',
	'%2B': '+',
	'%253D': '=',
	'%2528': '(',
	'%2529': ')',
	'%253C': '<',
	'%253E': '>',
	'%2524': '$'}
	var input_arr = input.split('&');
	var input_value = input_arr[1].substring(6);
		
	for (var key in arr){
		input_value = input_value.replace(new RegExp(key, 'g'),arr[key]);
	}
	
	var result = $.parseJSON(input_value);
	return result;
};
