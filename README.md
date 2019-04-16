# Welcome to the Gigapet BE! 🐾

This document contains:

1. Git flow for working with teams
2. General information
3. API endpoints and instructions on how to use them

## Git flow for teams:

**Making pull requests**
Clone this repository locally. Do not fork it. Once you clone the repo locally, create a new branch.

`git checkout -b <branch-name>`

You will now be switched to your branch, that you can start working on. You can then commit your changes and create a pull request. Try to include as much information as needed in your pull request to help both your team mate and team leader:

- What you worked on and any features implemented
- What bug was fixed (if any)

**After creating pull request**

Check and resolve any conflicts. Ask for review from team leader or PM. Team Leader or PM will then merge pull request.

**After pull request has been merged**

You will then need to pull the latest changes from Github. Use the following commands:

````git checkout master
git pull // <--- this should update your files with master
git checkout -b <your-new-branch>```
````

## General Information:

- API URL: https://lambda-gigapet.herokuapp.com/
- Schema draft: https://airtable.com/invite/l?inviteId=invyoVfZQYErrQD6x&inviteToken=209673e8e1718f2a01bdccfc8aebe38b1cc08d86c54593ebe9d595e0c6727d39

## Endpoints:

### AUTH

**Register a new parent**

URL: /api/auth/register

Request body:

```
{
    name: 'string', // required
    email: 'string', // required, must be unique
    username: 'string', // required, must be unique
    password: 'string', // required
    img_url: 'string', // not required
}
```

Successful response: 201 (Created)

```
{
    token: 'string', // set this in local storage and use it in the request header to access restricted routes
     id: number // can be used to get parent details in the user page
}
```

Unsuccessful response: 500

```
{
    message: 'The user could not be created'
}
```

Reasons for unsuccessfull response: Username or email is taken, internal server error.

**Login with existing parent**

URL: /api/auth/login

Request body:

```
{
    'username': 'string', // required
    'password': 'string', // required
}
```

Successful response: 200 (OK)

```
{
    token: 'string', // same as register
    id: number // same as register
}
```

Unsuccessful response: 500

```
{
    message: 'User could not be found'
}
```

### PARENTS

### CHILDREN AND PETS

**GET ALL PETS**

URL: /api/pet

Returns an array of pets, and their corresponding moods. These pets are not assined to any child, but can be used for display a pet for the child/parent to choose.

**GET CHILD BY ID AND THEIR PET DETAILS**

URL: /api/child/:id

Returns the child object and details for his/her pet with corresponding moods. For example:

### FOOD ENTRIES
