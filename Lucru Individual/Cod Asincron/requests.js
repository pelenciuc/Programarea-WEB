//    12.2
const result = document.createElement('div');
result.id = 'result';
document.body.appendChild(result);

function userRequest() {
    const result = document.getElementById('result');
    result.innerHTML = "Waiting for server response...
    

    const data = serverResponse().then(data => {
        result.innerHTML = data
    }).catch(e => {
        console.log(e)
    });
}


function serverResponse() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Response from server.')
        }, 2000)
    })
}

userRequest()



// 12.3
async function userRequestAsync() {
    try {
        const result = document.getElementById('result');
        result.innerHTML = "Waiting for server response..."

        const data = await serverResponseAsync();
        result.innerHTML = data;
    } catch (e) {
        console.log(e)
    }
}


async function serverResponseAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Response from server async.')
        }, 3000)
    })
}

userRequestAsync()
