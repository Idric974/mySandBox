console.log('TEST : fetchPost2');

const myFetch = async () => {

    const fetchData =
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                "Accept": "application/json; charset=UTF-8",
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                firstName: 'Idric',
                lastName: 'Evarne',
            })
        })

    if (fetchData.ok === true) {

        return fetchData.json();

    } throw new Error('Impossible de contacter le server')

}

myFetch().then(users => console.log(users))









