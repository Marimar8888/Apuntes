class Account {
    constructor({ username, password }) {
        this.username = username;
        this.password = password;
    }
}

const user = new Account({ username: "Maria Alonso", password: "2123456" });
console.log(user);
console.log(user.username);