async function main() {
    let user = await fetchCurrentUser()

    var [ archivedOrders, currentOrders ] =
        await Promise.all([
            fetchArchivedOrders( user.id ),
            fetchCurrentOrders( user.id )
        ])
}

main()


getFile = file => {
    return new Promise(resolve => {
        fakeAjax(file, resolve)
    })
}

async function loadFiles(files) {
    //req files concurrently
    let promises = files.map(getFile)
    for (let promise of promises) {
        await promise
    }
}

//async iteration
async function fetchFiles(file) {
    let promises = files.map(getFile)
    //this will not work because await only works in an async fn
    promises.forEach(each => await promise)
}

//github.com/getify/fasy - asynchronous iterator library
async function fetchFiles(files) {
    let promises = await FA.concurrent.map(getFile, files)

    await FA.serial.forEach(async function each(promise) {
        await promise
    }, promises)
}

//github.com/getify/CAF - stopping awaits with cancellation tokens
let token = new CAF.cancelToken()
let main = CAF(function *main(signal, url) {
    let response = yield fetch(url, { signal })
    return response
})

main(token.signal, 'http://some.tld').then(onResponse, onCancelOrError)

setTimeout(function onElapse() {
    token.abort('Request took too long')
}, 5000)




