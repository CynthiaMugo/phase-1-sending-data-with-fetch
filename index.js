// Add your code here
function submitData(name, email) {
    const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email,
    }),
}
    return fetch("http://localhost:3000/users", configurationObject)
.then(function (response) {
    return response.json();
})
.then(function (object) {
    const message = document.createElement("p");
      message.textContent = `User ID: ${object.id}`;
      document.body.appendChild(message);
})
.catch(function (error) {
    const message = document.createElement("p");
    message.textContent = "Unauthorized Access";
    document.body.appendChild(message);
})
}

submitData("Steve", "steve@steve.com")
