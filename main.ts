input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    calliBot2.servo(C2Servo.Servo1, 15)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    calliBot2.servo(C2Servo.Servo1, 45)
})
calliBot2.servo(C2Servo.Servo1, 45)
basic.forever(function () {
    if (calliBot2.entfernung(C2Einheit.cm) <= 5) {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.pause(500)
        calliBot2.servo(C2Servo.Servo1, 45)
        basic.pause(500)
        calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 50)
        basic.pause(1000)
        calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, 50)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 50)
        basic.pause(1000)
        calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
        basic.pause(1000)
        calliBot2.servo(C2Servo.Servo1, 15)
        basic.pause(200)
        calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 50)
        basic.pause(1000)
    } else {
        calliBot2.servo(C2Servo.Servo1, 15)
        calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
    }
})
