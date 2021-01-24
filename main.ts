let T1 = 0
let T3 = 0
let T2 = 0
input.onButtonPressed(Button.A, function () {
    T1 = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    T3 = T2 - T1
    basic.showString("" + (T3))
})
input.onButtonPressed(Button.B, function () {
    T2 = input.runningTime()
})
basic.forever(function () {
	
})
