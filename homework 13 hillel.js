object = {
    x: +prompt("Введите Х"),
    y: +prompt("Введите У"),
    znak: prompt("Введите знак")

};

function Supermath() {

    this.check = function(object) {


        if (confirm("Сделать математическое действие?")) {
            console.log(this.znakAction(object))
        } else {
            alert("Вы нажали кнопку отмена")
            this.input()
        }
    }
    this.input = function() {
        this.check(object);
    }
    Supermath.prototype.znakAction = function(object) {

        this.object = object;

        if (object.znak == "+" || object.znak == "%" || object.znak == "-" || object.znak == "*" || object.znak == "/") {
            console.log("Sign correct")
        } else {
            return "Sign  not right"
        }
        console.log("znak", object.znak);
        for (var key in object) {

            result = eval(object.x + object.znak + object.y);
            return result;
        }
    }
}
var exemplar = new Supermath()
var exemplar2 = new Supermath()
exemplar.check(object);
exemplar2.check(object);