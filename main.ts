input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list[1]))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (text_list[10]))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (text_list[3]))
})
let text_list: string[] = []
basic.showLeds(`
    . # . # .
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    `)
basic.showIcon(IconNames.Happy)
basic.showLeds(`
    . # . # .
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    `)
basic.showIcon(IconNames.Happy)
text_list = [
"USB",
"CPU",
"PSU",
"RAM",
"GPU",
"Modem",
"Icon",
"Cord",
"WiFi",
"GUI",
"URL"
]
basic.forever(function () {
	
})
