//async all at once
async function fetchURLs(urls) {
    let results = []

    for (let url of urls) {
        let response = await fetch(url)
        if (response.status === 200) {
            let text = await response.text()
            yield text.toUpperCase()
        } else {
            yield undefined
        }
    }

    return results
}

//async and wait for every iteration
async function main(favoriteSites) {
    let it = fetchURLs(favoriteSites)

    while (true) {
        let res = await it.next()
        if (res.done) break
        let text = res.value
        console.log(text)
    }
}

//for await loop
async function main(favoriteSites) {
    for await (let text of fetchURLs(favoriteSites)) {
        console.log(text)
    }
}