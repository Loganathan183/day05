let myResume={
    "basics": {
      "name": "LOGANTHAN.S",
      "email": "viratlogu183@gamil.com",
      "phone": 6383100474,
      "degree": "B.E",
      "location": {
        "address": "No:368 iyyappanthangal chennai",
        "postalCode": 600122,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "github":"https://github.com/Loganathan183"
        }
      ]
    },
    "education": [
      {
        "institution": "Madha engineering college",
        "department": "computer science and engineering",
        "batch start year": 2020,
        "batch end year": 2024,
        "gpa": 7.6,
      }
    ],
    "skills": [
      {
        "name": "html,css,javascript",
        "level": "beginner",
        "project": [
          "E-commerce appliactaion"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "my hobbies": "reading books"
      }
    ]
  }
  console.log(myResume);




var json = [{
    "id" : "loganathan", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "viratlogu183@gmail.com"
},
{
    "id" : "logu", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "viratlogu183@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);

 