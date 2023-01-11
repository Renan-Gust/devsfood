// interface configType {
//     method: string;
//     headers: {
//         [key: string]: string;
//     };
//     body?: {} | any;
// }

// export async function callFetch(method: string, url: string, body?: {}) {
//     try {
//         const config: configType = {
//             method: method,
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: JSON.stringify({
//                 data: body
//             })
//         }

//         let response

//         if(method === "POST"){
//             response = await axios.
//         } else{
//             response = await fetch(url)
//         }

//         console.log(response)
          
//         return response
//     } catch (err) {
//         console.log('Erro na requisição:', err)
//     }
// }
