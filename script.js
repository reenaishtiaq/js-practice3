function changeName() {
    document.querySelector('h1').innerHTML = document.querySelector('input').value;
}
function changeColor() {
    document.querySelector('h1').style = 'color: green'; 
}
function clearColor () {
    document.querySelector('h1').style = 'color: black';
}