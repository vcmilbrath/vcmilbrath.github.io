"use strict";

const srcs = [
    "/assets/images/dorm_study/dorm_study01.png",
    "/assets/images/hamlet/cover.png",
    "/assets/images/location/gould.png",
    "/assets/images/october/18_01.png",
    "/assets/images/desert_bird/cover.png",
    "/assets/images/neighborhood2020/cover.png",
    "/assets/images/horizon/cover.png"
]

var images = new Array()
function preload(args) {
    for (i = 0; i < args.length; i++) {
        images[i] = new Image()
        images[i].src = args[i]
    }
}
preload(srcs)