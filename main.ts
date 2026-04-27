let start = 0
let tiempo_pasado = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    tiempo_pasado = input.runningTime() - start
    score = Math.abs(tiempo_pasado - 7000)
    for (let index = 0; index < 4; index++) {
        basic.showNumber(score / 1000)
    }
})
