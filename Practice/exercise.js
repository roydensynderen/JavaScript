let defaults = {
    topic: 'JavaScript',
    format: 'Live',
    slides: {
        start: 0,
        end: 100
    }
}

fakeAjax('https://get-the-workshop.tld', handleResponse)

let settings
function handleResponse({
    topic = 'JavaScript',
    format = 'Live',
    slides: {
        start = 0,
        end = 100
    },
} = {}) {
    TestCase({
        topic,
        format,
        slides: {
            start,
            end
        }
    })
}