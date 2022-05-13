class ProfileData {    
    // Geting Data From JSON File
    async getProfile(url) {
        const request = await fetch(url, {
            method:"GET",
            headers:{"Content-type" : "application/json"}
        });
        const resData = await request.json();
        return resData;
    }
}