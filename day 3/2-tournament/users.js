let users = [
    {id: 1, username: 'giang123', displayName: 'Giang', age: 18},
    {id: 2, username: 'khoa321', displayName: 'Khoa', age: 20},
]

export function getUsers() {
    return users
}

export function getUserById(userId) {
    return users.find(user => {
        return user.id === userId
    })
}

export function addUser(user) {
    users.push({
        id: users.length + 1,
        username: user.username,
        displayName: user.displayName
    })
}

export function deleteUserById(userId) {
    return users.filter(user => {
        return user.id !== userId
    })
}

export function updateUserById(userId, user) {
    const userIndex = users.findIndex(eachUser => {
        return eachUser.id === userId
    })

    users[userIndex].username = user.username
    users[userIndex].displayName = user.displayName
    users[userIndex].age = user.age
}