class UI {
    constructor() {
        this.imgShowUI = document.querySelector(".img-show");
        this.userInfoUI = document.querySelector("#user-info");
    }

    showProfile(profile) {
        this.imgShowUI.innerHTML = `
            <img src="${profile.img_url}">
        `;
        this.userInfoUI.innerHTML = `
        <li class="list-group-item list-group-item-primary">Name: ${profile.name}</li>
        <li class="list-group-item list-group-item-secondary">Gender: ${profile.gander}</li>
        <li class="list-group-item list-group-item-success">Looking for ${profile.looking_for}</li>
        <li class="list-group-item list-group-item-info">Age: ${profile.age}</li>
        <li class="list-group-item list-group-item-dark">Lives In: ${profile.address}</li>
        <li class="list-group-item">Phone Number: ${profile.phone}</li>
        <li class="list-group-item">Email: ${profile.email}</li>
        <li class="list-group-item">Blood Group: ${profile.blood_group}</li>
        <li class="list-group-item">Weight: ${profile.weight} & Height: ${profile.height}</li>
        `
    }
}