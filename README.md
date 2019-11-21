### HACKTIV-OVERFLOW###

REST API Documentation

---

**USER**

GET All User

```
url: '/users/',
method: 'GET',
headers: token,
body: none
```

example output :

```
[
    {
        "_id": "5dd4d65de65f4333bdc9231a",
        "username": "owl",
        "email": "owl@gmail.com",
        "password": "$2a$10$6SX2w9JlLqyuFQ1gmtDNUO39Rrcky5DrBcVTA.o7AxxU2g4Qv6/3G"
    },
    {
        "_id": "5dd4d8ca7ae70a353312dc18",
        "username": "erena",
        "email": "erena@gmail.com",
        "password": "$2a$10$oGxP0Yn6AVtPiNRsGUf0v.0b.ympEM9mYM6xK7t9pYgj0d6mGmnry"
    }
]
```



POST Create New User

```
url: '/users/',
method: 'POST',
headers: token,
body: {
    username,
    email,
    password
}
```

example output :

```
{
    "user": {
        "_id": "5dd4dcd0a4c525369a8b91af",
        "username": "squall",
        "email": "squall@gmail.com",
        "password": "$2a$10$aqblr1uQLsA9M98Nyh.x4OcrDn/kLap9V6wE4PkarDvpERfrihTCa"
    },
    "message": "Thank You for Trusting Us :)"
}
```



POST Login User

```
'/users/login'
```

example output :

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRkNjVkZTY1ZjQzMzNiZGM5MjMxYSIsInVzZXJuYW1lIjoib3dsIiwiaWF0IjoxNTc0MjMxMjEwLCJleHAiOjE1NzQyMzQ4MTB9.OTVkm8Ln1tibGfRA4_E68Swvkxit-3WTf2AAyOKdHbc",
    "message": "Welcome <username>, I Hope you enjoy your day! :)"
}
```

---



**Question**

GET All Question

```
url: '/questions/',
method: 'GET'
headers: token
body: none
```

example output :

```
[
    {
        "answers": [],
        "upVote": [],
        "downVote": [],
        "_id": "5dd4dfe779f333397db604b9",
        "title": "Tanya doong",
        "description": "Apaan???",
        "userId": "5dd4d65de65f4333bdc9231a",
        "__v": 0
    },
    {
        "answers": [],
        "upVote": [],
        "downVote": [],
        "_id": "5dd4e01311f1e739b7885474",
        "title": "Tanya lagi doong",
        "description": "Apaan Sie???",
        "userId": "5dd4d65de65f4333bdc9231a",
        "__v": 0
    },
    {
        "answers": [],
        "upVote": [],
        "downVote": [],
        "_id": "5dd4e04795a4c539e17ae6ca",
        "title": "JavaScript Problem",
        "description": "I have some problem with this funtion, anyone help me?",
        "userId": "5dd4d65de65f4333bdc9231a",
        "__v": 0
    }
]
```



POST New Question 

```
url: '/question/',
method: 'POST',
headers: token,
body: {
    title,
    description
}
```

example output :

```
{
    "question": {
        "answers": [],
        "upVote": [],
        "downVote": [],
        "_id": "5dd4e04795a4c539e17ae6ca",
        "title": "JavaScript Problem",
        "description": "I have some problem with this funtion, anyone help me?",
        "userId": "5dd4d65de65f4333bdc9231a",
        "__v": 0
    },
    "message": "Your question has been post"
}
```



DELETE Question

```
url: '/questions/:questionId',
method: 'DELETE',
headers: token,
body: none
```

example output :

```
{
    "message": "Your question has been deleted"
}
```



UPDATE Question

```
url: '/questions/:questionId',
method: 'PUT',
headers: token,
body: {
    title,
    description
}
```

example output :

```
{
    "message": "Your Question has been updated"
}
```



UPVOTE Question 

```
url: '/questions/:questions/upvote',
method: 'PATCH',
headers: token,
body: none
```

example output :

```
{
    "message": "You Up Vote this question"
}
```



DOWNVOTE Question 

```
url: '/questions/:questionId/downvote',
method: 'PATCH',
headers: token,
body: none
```

example output :

```
{
    "message": "You Down Vote this question"
}
```





















---



**ERROR**

Validation Error example :

```
{
    "message": "Password Cannot be Empty"
}
```

```
{
    "message": "laskar@gmail.com already taken, please take another one, laskarks 						already taken"
}
```



Authentication Error example : 

```
{
    "message": "You must Login First as User"
}
```



Authorization Error example :

```
{
    "message": "You dont have authorize to do that"
}
```



