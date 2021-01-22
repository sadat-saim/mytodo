// deleting an item
document.body.addEventListener('click', deleteItem);


function deleteItem(e) {


    if (e.target.classList.contains('delete-item')) {
        const li = e.target.parentElement;
        if (confirm('Are you sure you want to delete?')) {
            li.parentElement.removeChild(li);
        }

    }
}

//second option

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {

//     if (e.target.classList.contains('delete-item')) {
//         console.log('delete item');
//         e.target.parentElement.remove();
//     }
// }

//adding an item


const addingItems = document.forms[0]
addingItems.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    let value = document.querySelector('input[type="text"]').value;


    //capitalized in here
    let words = value.split(" ");
    let medium;
    let capitalized = [];

    for (let i = 0; i < words.length; i++) {
        medium = words[i].slice(0, 1).toUpperCase() + words[i].slice(1).toLowerCase();
        capitalized.push(medium);
    }
    capitalized = capitalized.join(" ")
    console.log(capitalized);

    /*=============== Legacy version============
    // value = value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase();

    // console.log(value.split(" "));

    ====================*/


    if (value == "") {
        alert("Please insert a task!");
    } else {
        document.querySelector('li').insertAdjacentHTML('beforebegin', `<li><span>${capitalized}</span> <a href="#" class="delete-item button">delete</a></li>`);
    }

    document.querySelector('input[type="text"]').value = '';
}

//second option is creationg element then append it and it is
// quite hard though suggest to use this method insteads