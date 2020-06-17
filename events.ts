//% color=#20639B icon="\u260e"
//% groups='[]'
namespace events {
    const handlerMap: { [name: string]: Action[] } = {};

    /**
     * Registers a callback for the specified event.
     */
    //% blockId=events_onevent block="on $event"
    //% event.defl="event"
    //% afterOnStart=true blockAllowMultiple=1
    export function on(event: string, handler: Action) {
        if (!handlerMap[event]) {
            handlerMap[event] = [];
        }
        const handlers = handlerMap[event];
        handlers.push(handler);
    }

    /**
     * Unregisters a callback (STS-only, doesn't work in blocks).
     */
    export function off(event: string, handler: Action) {
        if (handlerMap[event]) {
            handlerMap[event] = handlerMap[event].filter((value) => value !== handler);
        }
    }

    /**
     * Raises an event.
     */
    //% blockId=events_raiseevent block="raise $event"
    //% event.defl="event"
    export function raise(event: string) {
        const handlers = handlerMap[event] || [];
        handlers.slice().forEach((handler) => handler());
    }
}