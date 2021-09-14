export const getAllBaboonRoutineEntries = (url) => {
    return fetch(url)
        .then(res => res.json())
}

export const postFetch =(url, data) => {
    return fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(res => res.json())
}

export const getFetch = (url) => {
    return fetch(url)
    .then(res => res.json())
}

export const putFetch = (url, obj) => {
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            obj
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
    .then(json => console.log(json))
}