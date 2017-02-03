	//remove icon svg
	var removeSVG = '<svg enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1_1_"><path d="M494,256c0,131.4-106.6,238-238,238S18,387.4,18,256S124.6,18,256,18S494,124.6,494,256z" fill="#F06292"/></g><g id="Layer_2"><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="20" x1="114.4" x2="397.5" y1="260" y2="260"/></g></svg>';
	//complete icon svg
	var completeSVG = '<svg height="32" style="overflow:visible;enable-background:new 0 0 32 32" viewBox="0 0 32 32" width="32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g id="Complete_x5F_Symbol_1_"><g id="Complete_x5F_Symbol"><circle cx="16" cy="16" id="BG" r="16" style="fill:#19D873;"/><polygon id="Done_x5F_Symbol" points="14,17.9 14,17.9 14,17.9 10.1,14 8,16.1         14,22.1 24,12.1 21.9,10 " style="fill:#E6E6E6;"/></g></g></g></svg>';

	document.getElementById('add').addEventListener('click', function() {
		var value = document.getElementById('item').value;
		if (value) {
			addItemTodo(value);
			document.getElementById('item').value = '';
		}
	});

	function removeItem() {
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;
		parent.removeChild(item);
	}

	function completeItem() {
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;
		var id = parent.id;
		var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
		parent.removeChild(item);
		target.insertBefore(item, target.childNodes[0]);
	}

	function addItemTodo(text) {
		var list = document.getElementById('todo');
		var item = document.createElement('li');
		item.innerText = text;
		var buttons = document.createElement('div');
		buttons.classList.add('buttons');
		var remove = document.createElement('button');
		remove.classList.add('remove');
		remove.innerHTML = removeSVG;
		remove.addEventListener('click', removeItem);
		var complete = document.createElement('button');
		complete.classList.add('complete');
		complete.innerHTML = completeSVG;
		complete.addEventListener('click', completeItem);
		buttons.appendChild(remove);
		buttons.appendChild(complete);
		item.appendChild(buttons);
		list.insertBefore(item, list.childNodes[0]);
	}