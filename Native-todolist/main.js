var show_todo = document.getElementsByClassName('show_todo')[0];
var count = document.getElementById('count').getElementsByTagName('span')[0];
var text = document.getElementById('text');
var ul = document.getElementsByTagName('ul')[0];
var clr_a = document.getElementById('clr').getElementsByTagName('a');

show_todo.onclick = function(event) {
    var event = event || window.event; //IE6
    var tagName = event.target.tagName.toLowerCase();
    if (tagName == 'input') {
        if (event.target.checked == true) {
            event.target.nextElementSibling.className = 'checked';
        } else {
            event.target.nextElementSibling.className = '';
        }
    } else if (tagName == 'a') {
        event.target.parentNode.remove();
    }
    show_count();
}

window.onkeydown = function(event) {
    var event = event || window.event;
    if (event.keyCode == 13) {
        if (text.value !== '') {
            var value = text.value;
            text.value = '';
            generate_form(value);
        }
    }

}

clr_a[0].onclick = function() {
    while (true) {
        var checked = show_todo.getElementsByClassName('checked');
        checked[0].parentNode.remove();
    }
}

clr_a[1].onclick = function() {
    ul.innerHTML = '';
    show_count();
}

clr_a[2].onclick = function() {
    ul.innerHTML = '';
    var save = JSON.parse(localStorage.save);
    for (let i = 0; i < save.length; i++) {
        generate_form(save[i].text, save[i].checked);
    }
    show_count();
}

clr_a[3].onclick = function() {
    var span = ul.getElementsByTagName('span');
    var save = new Array;
    for (let i = 0; i < span.length; i++) {
        save.push({
            'checked': span[i].className,
            'text': span[i].innerHTML
        });
    }
    localStorage.save = JSON.stringify(save);
    alert('save successfully');
}

function generate_form(value, checked = '') {
    var li = document.createElement('li');
    var input = document.createElement('input');
    var span = document.createElement('span');
    var a = document.createElement('a');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'checkbox');
    if (checked !== '') {
        input.setAttribute('checked', 'checked');
        span.className = 'checked';
    }
    span.innerHTML = value;
    a.href = 'javascript:void(0)';
    a.setAttribute('id', 'clean');
    a.innerHTML = 'x';
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(a);
    ul.append(li);
    show_count();
}

function show_count() {
    var num = show_todo.getElementsByTagName('li').length;
    var checked = show_todo.getElementsByClassName('checked').length;
    num = num - checked;
    count.innerHTML = num;
}