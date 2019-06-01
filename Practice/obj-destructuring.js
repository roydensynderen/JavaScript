data = () => {
    return {
        a: 1,
        b: 2,
        c: 3
    }
}

//imperative
let tmp = data()
let first = tmp.a !== undefined ? tmp.a : 42
let second = tmp.b
let third = tmp.c

//declarative [source: target] approach
let {
    a: first = 42,
    b: second,
    c: third
} = data()

//imperative
let o = {
    prop: value,
    target: source
}
//declarative
let {
    prop: value,
    source: target
} = o

//imperative
let tmp = data() || {}
let first, second
first = tmp.a
second = tmp.b

let first, second, tmp
//declarative, wrapped in () to state that it is not a block
({
    a: first,
    b: second
} = data())
//unless assigned
tmp = {
    a: first,
    b: second
} = data() || {}

//imperative
let a = tmp.a
let b = tmp.b

//declarative
let {
    a,
    b
} = data() || {}


//with sub-objects
data = () => {
    return {
        a: 1,
        b: {
            c: 3,
            d: 4
        }
    }
}

//imperative
let tmp = data() || {}
let c = b.c
let d = b.d

//declarative
let {
    a, 
    b: {
        c,
        d
    //object default fallback, never have nested object defaults
    } = {}
} = data() || {}

//param default fallback
//imperative
data = (tmp = {}) => {
    let {
        a,
        b
    } = tmp
}

//declarative
data = ({
    a,
    b
} = {}) => {

}

// nested destructuring
let obj = {
    a: 1,
    b: {
        x: 2
    },
    c: 3
}

let {
    a,
    //b going to receive full object, can use multiple times
    b,
    b: {
        x: w
    },
    c
} = obj