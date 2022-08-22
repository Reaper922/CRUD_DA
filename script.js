let names = [];
let phoneNumbers = [];
loadContacts();
render();


function render() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `
        <h1>Meine Kontakte</h1>
        <div>
            <input placeholder="Name" id="name">
            <input placeholder="Telefon" id="phone">
            <button onclick="addContact()">Hinzufügen</button>
        </div>`;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];

        content.innerHTML += `
            <div class="card">
                <b>Name: </b> ${name} <br>
                <b>Telefon: </b> ${phoneNumber} <br>
                <button onclick="deleteContact(${i})">Löschen</button>
            </div>`;
    }
}

function addContact() {
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');

    names.push(name.value);
    phoneNumbers.push(phone.value);

    render();
    saveContacts();
}

function deleteContact(index) {
    names.splice(index, 1);
    phoneNumbers.splice(index, 1);

    render();
    saveContacts();
}

function saveContacts() {
    const namesAsText = JSON.stringify(names);
    const phoneNumbersAsText = JSON.stringify(phoneNumbers);

    localStorage.setItem('names', namesAsText);
    localStorage.setItem('phoneNumbers', phoneNumbersAsText);
}

function loadContacts() {
    const namesAsText = localStorage.getItem('names');
    const phoneNumbersAsText = localStorage.getItem('phoneNumbers');

    if (namesAsText && phoneNumbersAsText) {
        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(phoneNumbersAsText);
    }
}