const users = "https://jsonplaceholder.typicode.com/users";
const posts = "https://jsonplaceholder.typicode.com/posts";

const Letter = {
    get: async function (url) {
        const response = await fetch(url);
        return await response.json();
    }
}

const renderUsers_posts = async function (users, posts) {
    let getusers = await Letter.get(users);
    let getposts = await Letter.get(posts);

    const arr = getusers.map((el) => {
        return {
            id: el.id,
            name: el.name,
            username: el.username,
            email: el.email,
            address: el.address.street + "," + el.address.suite + "-" + el.address.zipcode + " " + el.address.city,
            phone: el.phone,
            website: el.website,
            company: el.company.name,
            posts: getposts.filter(po => { return (po.userId == el.id ? po : '') })
        }
    })

    document.querySelector(".main").innerHTML = "<pre>" + JSON.stringify(arr, null, 4) + "</pre>";
}

renderUsers_posts(users, posts);
module.exports = { renderUsers_posts };

