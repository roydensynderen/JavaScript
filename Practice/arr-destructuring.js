data = () => [1,2,3]

//imperative approach
let tmp = data()
let first = tmp[0]
//default value
let second = tmp[1] !== undefined ? tmp[1] : 10
let third = tmp[2]
let fourth = tmp.slice(3)

//declarative approach
let [
    first,
    //default value
    second = 10,
    //array illusion
    ,
    ,
    third,
    ...fourth
] = tmp = data()

//assign to array
let o = []
let [
    o[0],
    o[1],
    o[2],
    ...o[100],
] = tmp = data()

//imperative swap
let x = 10
let y = 20

{
    let tmp = x
    x = y
    y = tmp
}

//declarative swap
[y,x] = [x,y]

//array params
//imperative
data = tmp => {
    let [
        first,
        second,
        third
    ] = tmp
}

//declarative
data = ([
    first,
    second,
    third
]) => {
    // ..
}

//default fallback
let tmp = data() || []
//in param
data = (tmp = []) => {}

// destructure nested array
//imperative
let first = tmp[0]
let tmp2 = tmp[1]
let second = tmp2[0]
let third = tmp2[1]
let fourth = tmp[2]

//declarative
let [
    first,
    [
        second,
        third
    //array fallback
    ] = [],
    fourth
] = tmp = data() || []












