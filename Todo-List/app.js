const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('list-container');

function addTask(){

    if(inputBox.value === ''){
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        listContainer.appendChild(li);
        li.innerHTML= inputBox.value;
    }
    
}