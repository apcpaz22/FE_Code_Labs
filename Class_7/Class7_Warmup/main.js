const body = document.querySelector('body');
body.style.backgroundColor = ('#ff00ff');

function changeBackground(color){
    document.body.style.backgroundColor = color;
}

const colorPicker = document.getElementById("colorPicker")
colorPicker.addEventListener("change",colorChanged)

function colorChanged(){
    console.log("Color Changed")
    console.log(this.value)
    changeBackground(this.value)
}