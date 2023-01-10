interface configType {
    method: string;
    headers: {
        [key: string]: string;
    };
    body?: {} | any;
}

export async function callFetch(method: string, url: string, body?: {}) {
    try {
        const config: configType = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: body,
            })
        }

        let response

        if(method === "POST"){
            response = await fetch(url, config)
        } else{
            response = await fetch(url)
        }
          
        return response
    } catch (err) {
        console.log('Erro na requisição:', err)
    }
}