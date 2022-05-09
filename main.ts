basic.forever(function () {
    if (input.soundLevel() < 100) {
        basic.showIcon(IconNames.SmallHeart)
    }
    if (input.soundLevel() > 100) {
        basic.showIcon(IconNames.Heart)
    }
})
