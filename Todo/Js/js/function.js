var btRegistrer = document.getElementById('buttonRegister');
var task = document.getElementById('inputTask');
var description = document.getElementById('inputDescr');

btRegistrer.addEventListener('click', function(evt){
	
	evt.preventDefault();

	task.value;
	description.value;

	if(task.value === '' || description.value === ''){
		//add campo error
		task.classList.add('error');
		description.classList.add('error');
		
	}else{

		listTask.innerHTML += '<li id="taskItem"><h4>'+task.value+'<div id="iconClose">x</div></h4><p>'+description.value+'</p></li>';

		// rmv campo error
		task.classList.remove('error');
		description.classList.remove('error');
	};


	// //remove
	task.value = '';
	description.value = '';

	var taskItem = document.getElementById('taskItem');
	var iconClose = document.querySelector('#iconClose')

	
	



});	


