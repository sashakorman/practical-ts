declare const loggedInUsername: string;

const users = [
    { name: 'Oby', age: 12 },
    { name: 'One', age: 32 }
];

const loggedInUser = users.find(({ name }) => name === loggedInUsername);

// @ts-ignore
console.log(loggedInUser.age);
