input.onButtonPressed(Button.A, function () {
    radio.sendValue("farge", 0x00FFFF)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("bip")
})
radio.onReceivedValue(function (name, value) {
    led.toggle(2, 2)
    serial.writeValue(name, value)
})
let id = 12
radio.setGroup(id)
basic.showNumber(id)
