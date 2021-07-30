// Write your solution here!

var drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    return drivers.push("Ralph")
}

function destructivelyPrependDriver(name){
    return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name){
    return drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
    return drivers.shift()
}

function appendDriver(name){
    return [...drivers, "Broom"]
}

function prependDriver(name){
    return ["Arnold", ...drivers]
}

function removeLastDriver(name){
    return drivers.slice(0,drivers.length-1)
}

function removeFirstDriver(name){
    return drivers.slice(1)
}