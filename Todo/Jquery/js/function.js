//Function

 $('#buttonRegister').click(function(event){

	event.preventDefault();

	var task = $("#inputTask").val();
	var description = $("#inputDescr").val();

	if(task === '' || description === ''){
		$("#inputTask").addClass('error');
		$("#inputDescr").addClass('error');
		
	}else{

		$('#listTask').append("<li>"+
							"<h4>"+task+"<span class='close'>x</span></h4>"+
							"<p>"+description+"</p>"+
							"</li>"+
						"");

		$("#inputTask").removeClass('error');
		$("#inputDescr").removeClass('error');
	}

	//clean input
	$("#inputTask").val("");
	$("#inputDescr").val("");

	//remove taks
	$('.close').click(function(){
		$(this).closest('li').fadeOut();
	})
});

 //dagen drop
 $(function() {  
        $("#listTask").sortable();  
 });  

