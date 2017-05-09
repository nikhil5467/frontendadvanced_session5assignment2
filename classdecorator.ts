function ClassDecorator(
    target: Function // The class the decorator is declared on
    ) {
    console.log("ClassDecorator called on: ", target);
}

@ClassDecorator
class ClassDecoratorExercise {
}

function ClassDecoratorParams(param1: number, param2: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class ClassDecoratorParamsExe {
}


function eat(
    target: Function// The class the decorator is declared on
    ) {
    console.log("Eat called on: ", target);
}

@ClassDecorator

class Eat {
    
}


function ClassDecoratorplay(par: number, par1: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + par + ", '" + par + "') called on: ", target);
    }
}

@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class ClassDecoratorParamsplay {
}