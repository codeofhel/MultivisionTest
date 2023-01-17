const { renderUsers_posts } = require('./post');

test('return a list of posts by a user', () => {
    const users = "https://jsonplaceholder.typicode.com/users";
    const posts = "https://jsonplaceholder.typicode.com/posts";
    return renderUsers_posts(users,posts).then((data) => {
        expect(data.length).toBeGreaterThan(0);
        expect(typeof data == 'object').toBe(true)
    });
});