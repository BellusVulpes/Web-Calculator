function solve() {
    var a = document.getElementById('firstBox').value
    var b = document.getElementById('secondBox').value

    var operatorDropDown = document.getElementById('operator')
    var operator = operatorDropDown.options[operatorDropDown.selectedIndex].value
    var solution = document.getElementById('solution')

    switch(operator) {
        case "+":
            solution.innerHTML = (parseInt(a)+parseInt(b))
            break
        case "-":
            solution.innerHTML = (parseInt(a)-parseInt(b))
            break
        case "*":
            solution.innerHTML = (parseInt(a)*parseInt(b))
            break
        case "/":
            solution.innerHTML = (parseInt(a)/parseInt(b))
            break
    }
    
}