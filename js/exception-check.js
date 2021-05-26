function getUserById(id) {
    if (typeof id !== 'number' || id <= 0) {
        throw new Error('Invalid id argument');
    }

    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            username: 'admin'
        });
    });
}
getUserById('a')
    .then(user => console.log(user.username))
    .catch(err => console.log(err));