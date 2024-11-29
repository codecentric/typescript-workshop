export const loadAllUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");

    return users.json();
};

export const loadUser = async (id) => {
    const user = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    return user.json();
};
