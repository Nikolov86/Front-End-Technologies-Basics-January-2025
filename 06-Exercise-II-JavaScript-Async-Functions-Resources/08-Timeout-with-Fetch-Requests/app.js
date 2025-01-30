async function fetchWithTimeout(url = "https://swapi.dev/api/people/1", timeout = 2000) {
    const result = await Promise.race([
    
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Timeout has passed')
            }, timeout);
        })
    ])

    const data = await result.json();

}