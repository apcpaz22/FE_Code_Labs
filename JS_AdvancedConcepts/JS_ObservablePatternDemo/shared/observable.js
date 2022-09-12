export default class Observable{
    subscribers = [];

    subscribe(fn){
        this.subscribers.push(fn)
    }

unSubscribe(removefn){
    this.subscribers = this.subscribers.filter((fn)=>{
        return fn != removefn
    })
}

    broadcast(value){
        this.subscribers.forEach((fn)=>{
            fn(value)
        })
    }
}

