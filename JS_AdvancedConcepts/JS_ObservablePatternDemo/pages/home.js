export default class Home{

    constructor(){
        // when home instance is created, call render
        this.render()
    }

// render elements onto the page
render(){
    let appElement = document.getElementById('app');
    appElement.innerHTML += `
    <h1 class='text-center'>Social Media Page </h1>
    `
}


}