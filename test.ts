// tests go here; this will not be compiled when this package is used as an extension.

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    events.raise("event")
})
events.on("event", function () {
    console.log("event handler 1")
})
events.on("event", function () {
    console.log("event handler 2")
})
