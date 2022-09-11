export default class Settings{
    cons(){
        this.render();
    }

    render(){
        let appElem = document.getElementById("app");
        appElem.innerHTML +=`
        <h1 class='text-center'>Settings</h1>
        `
    }

}