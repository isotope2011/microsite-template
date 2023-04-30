const API_ENDPOINT ="https://<api-id>.execute-api.us-east-1.amazonaws.com/<stage>/<endpoint";

/*
    body: {
        emailAddress: "tester@gmail.com"
        fullName: "test tester"
        message: "test messag"
    }

    "body": {
        "name": "Sender Name",
        "reply_to": "sender@email.com",
        "message": "A test message"
    }
*/

export const sendDatatoAWS = async (data) => {
    if (data) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            name: data.fullName,
            reply_to: data.emailAddress,
            message: data.message,
        });

        const options = {
            method: 'POST',
            headers,
            body
        };

        return await fetch(API_ENDPOINT, options)
            .then(response => response.text())
            .then(result => {
                console.log('result', result);
                return result;
            })
            .catch(error => {
                console.log('error', error)
                return null;
            });
    } else {
        return null;
    }
}
