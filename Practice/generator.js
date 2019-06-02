main = () => {
    yield: 1
    yield: 2
    yield: 3
    return 4
}

let it = main()

it.next() // value 1, done: false
it.next() // value 2
it.next() // value 3
it.next() // value 4, done: true

[...main()] // [1,2,3]

let obj = {
    a: 1,
    b: 2,
    c: 3,
    //* means generator
    *[Symbol.iterator]() {
        for (let key of Object.keys(this)) {
            yield this[key]
        }
    }
}

[...obj] // [1,2,3]

let numbers = {
    *[Symbol.iterator]({
        start = 0,
        end = 100,
        step = 1
    } = {}) {
        for (let i = start; i <= end; i+= step) {
            yield i
        }
    }
}

console.log(`Numbers are ${[...numbers[Symbol.iterator]({
    start: 6,
    end: 30,
    step: 4
})]}`)
