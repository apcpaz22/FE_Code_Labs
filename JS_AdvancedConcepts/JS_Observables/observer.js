class Observable{
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

let celebrityObsv = new Observable();
celebrityObsv.subscribe((event)=>{
    console.log(`I am going to ${event}`);
})

const someFan = (event) =>{
    console.log(`I am not going to ${event}.`);
}

// celebrityObsv.subscribe((event)=>{
//     console.log(`I am not going to ${event}`);
// })

//console.log(celebrityObsv)
celebrityObsv.subscribe(someFan);
celebrityObsv.broadcast("Disco Morning");
celebrityObsv.unSubscribe(someFan);
celebrityObsv.broadcast("Fun Night Concert");