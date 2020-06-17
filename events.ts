//% color=#20639B icon="\u260e"
//% groups='[]'
namespace events {
    const handlerMap: { [name: string]: Action[] } = {};

    /**
     * Registers a callback for the specified event.
     */
    //% blockId=eventsonevent block="on $event"
    //% event.defl="event"
    //% afterOnStart=true blockAllowMultiple=1
    export function on(event: string, handler: () => void) {
        if (!handlerMap[event]) {
            handlerMap[event] = [];
        }
        const handlers = handlerMap[event];
        handlers.push(handler);
    }

    /**
     * Unregisters a callback.
     */
    export function off(event: string, handler: () => void) {
        const handlers = handlerMap[event] || [];
        while (handlers.removeElement(handler)) { }
    }

    /**
     * Raises the event.
     */
    //% blockId=eventsraiseevent block="raise $event"
    //% event.defl="event"
    export function raise(event: string) {
        const handlers = handlerMap[event] || [];
        handlers.slice().forEach(function (handler) {
            handler();
        })
    }

}