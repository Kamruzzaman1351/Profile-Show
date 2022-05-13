const userProfiles = [
    {
        "name":"Joann D. Hendricks",
        "gander":"Male",
        "looking_for": "Female",
        "address":"Tampa, FL 33607",
        "dob":"August 31, 1991",
        "age":"30 years old",
        "email":"JoannDHendricks@dayrep.com",
        "phone":"813-358-8023",
        "height":"174 centimeters",
        "weight":"161.7 pounds",
        "blood_group":"O+",
        "img_url":"https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        "name":"Glenda A. Hughes",
        "gander":"Female",
        "looking_for": "Male",
        "address":"Denver, CO 80221",
        "dob":"January 25, 1995",
        "age":"26 years old",
        "email":"GlendaAHughes@teleworm.us",
        "phone":"303-610-2376",
        "height":"168 centimeters",
        "weight":"189.9 pounds",
        "blood_group":"B+",
        "img_url":"https://randomuser.me/api/portraits/women/71.jpg"
    },
    {
        "name":"Robert P. Gelinas",
        "gander":"Male",
        "looking_for": "Female",
        "address":"Detroit, MI 48226",
        "dob":"January 11, 1956",
        "age":"66 years old",
        "email":"RobertPGelinas@dayrep.com",
        "phone":"734-672-7657",
        "height":"182 centimeters",
        "weight":"160.6 pounds",
        "blood_group":"AB+",
        "img_url":"https://randomuser.me/api/portraits/men/79.jpg"
    },
    {
        "name":"Kathryn E. Sawyer",
        "gander":"Female",
        "looking_for": "Male",
        "address":"Miami, FL 33169",
        "dob":"April 17, 1970",
        "age":"52 years old",
        "email":"KathrynESawyer@rhyta.com",
        "phone":"305-479-1014",
        "height":"156 centimeters",
        "weight":"227.7 pounds",
        "blood_group":"O+",
        "img_url":"https://randomuser.me/api/portraits/women/90.jpg"
    },
    {
        "name":"Dorothy S. Frazier",
        "gander":"Female",
        "looking_for": "Male",
        "address":"Portsmouth, VA 23707",
        "dob":"July 4, 1955",
        "age":"66 years old",
        "email":"DorothySFrazier@jourrapide.com",
        "phone":"757-394-4048",
        "height":"165 centimeters",
        "weight":"117.7 pounds",
        "blood_group":"O+",
        "img_url":"https://randomuser.me/api/portraits/women/81.jpg"
    },
    {
        "name":"Earl K. Young",
        "gander":"Male",
        "looking_for": "Female",
        "address":"Anaheim, CA 92801",
        "dob":"November 10, 1957",
        "age":"64 years old",
        "email":"EarlKYoung@teleworm.us",
        "phone":"951-642-0179",
        "height":"174 centimeters",
        "weight":"203.1 pounds",
        "blood_group":"O-",
        "img_url":"https://randomuser.me/api/portraits/men/80.jpg"
    },
    {
        "name":"Martha E. McKinney",
        "gander":"Female",
        "looking_for": "Male",
        "address":"Atlanta, GA 30303",
        "dob":"November 20, 1970",
        "age":"51 years old",
        "email":"JoannDHendricks@dayrep.com",
        "phone":"678-920-5379",
        "height":"164 centimeters",
        "weight":"207.9 pounds",
        "blood_group":"B+",
        "img_url":"https://randomuser.me/api/portraits/women/85.jpg"
    },
    {
        "name":"Barbara D. Frances",
        "gander":"Female",
        "looking_for": "Male",
        "address":"Kokomo, IN 46901",
        "dob":"August 1, 1959",
        "age":"62 years old",
        "email":"BarbaraDFrances@armyspy.com",
        "phone":"765-226-7586",
        "height":"168 centimeters",
        "weight":"141.5 pounds",
        "blood_group":"O-",
        "img_url":"https://randomuser.me/api/portraits/women/86.jpg"
    },
    {
        "name":"Elizabeth T. Glasgow",
        "gander":"Female",
        "looking_for": "Male",
        "address":"Kewanee, IL 61443",
        "dob":"October 1, 1978",
        "age":"43 years old",
        "email":"ElizabethTGlasgow@jourrapide.com",
        "phone":"309-852-9079",
        "height":"165 centimeters",
        "weight":"137.5 pounds",
        "blood_group":"AB+",
        "img_url":"https://randomuser.me/api/portraits/women/87.jpg"
    },
    {
        "name":"Fred M. Jenkins",
        "gander":"Male",
        "looking_for": "Female",
        "address":"New York, NY 10016",
        "dob":"July 28, 1971",
        "age":"50 years old",
        "email":"FredMJenkins@teleworm.us",
        "phone":"917-451-1191",
        "height":"171 centimeters",
        "weight":"131.3 pounds",
        "blood_group":"O+",
        "img_url":"https://randomuser.me/api/portraits/men/85.jpg"
    }
];

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: () => {
            return (nextIndex < profiles.length) ?
                   { value: profiles[nextIndex++], done: false } :
                   { done: true };
        }
    }
}

// UI Variables
const nextBtnUI = document.getElementById("next-profile");
// Event Listner
nextBtnUI.addEventListener("click", nextProfile);
document.addEventListener("DOMContentLoaded", nextProfile);
const porfile = profileIterator(userProfiles);
const ui = new UI;

// Next Profile
function nextProfile() {    
    const currentProfile = porfile.next().value;
    if(currentProfile !== undefined) {
        ui.showProfile(currentProfile);
        // console.log(currentProfile);
    } else {
        window.location.reload();
    }
}