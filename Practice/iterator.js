let obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function() {
        let keys = Object.keys(this)
        let index = 0

        return {
            next = () => {
                (index < keys.length) 
                    ? { done: false, value: this[keys[index++]] }
                    : { done: false, value: undefined }
            }
        }
    }
}