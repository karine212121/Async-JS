// Вправа 1: Базовий Async/Await

// Напишіть функцію delayedMessage, яка повертає Promise, який вирішується через 2 секунди з повідомленням «Hello, World!».
// Створіть ще одну функцію printMessage, яка використовує async/await для виклику delayedMessage і реєструє повідомлення на консолі.

function delayedMessage ()  {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            console.log("Hello,world");
        },2000);
    });
}
delayedMessage();


async function printMessage () {
        const message = await delayedMessage();
    }
printMessage()

// Вправа 2: отримання даних з API

// Напишіть функцію fetchUser, яка отримує дані з API JSONPlaceholder (https://jsonplaceholder.typicode.com/users/1).
// Використовуйте async/await, щоб отримати дані та зареєструвати ім’я та електронну адресу користувача у консолі.



async function fetchUser() {
   const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
     return response.data
}
async function usersInfo() {
    try {
    const user = await fetchUser();
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
}
    catch (error) {
    console.error('error user',error);
}
}
usersInfo()


// Вправа 4: Послідовні асинхронні операції

// Напишіть функцію fetchPostAndUser, яка:
// Отримує публікацію з API JSONPlaceholder (https://jsonplaceholder.typicode.com/posts/1).
// Використовує userId з публікації для отримання відповідних даних користувача.
// Запишіть назву публікації та ім’я користувача у консоль.

 function fetchPostAndUser() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(postResponse => {
const post = postResponse.data;
return axios.get('https://jsonplaceholder.typicode.com/users/1 ').then(userResponse => {
    const user = userResponse.data;
    console.log(`Post title: ${post.title}`);
    console.log(`User name: ${user.name}`);
})
    })
    .catch((error) => {
        console.log(error);
    })
}
fetchPostAndUser()

// Вправа 5: Одночасні асинхронні операції

// Напишіть функцію fetchMultipleUsers, яка:
// Одночасно отримує дані для користувачів з ідентифікаторами 1, 2 і 3 з JSONPlaceholder API.
// Використовуйте Promise.all, щоб дочекатися виконання всіх запитів і записати масив імен користувачів у консоль.
///async function 
const fetchMultipleUsers = async() => {
        const response1 = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        const response2 = await axios.get('https://jsonplaceholder.typicode.com/users/2');
        const response3 = await axios.get('https://jsonplaceholder.typicode.com/users/3');
        const usersNames = await Promise.all([response1, response2, response3])
        console.log(usersNames)};
    
fetchMultipleUsers()

// Вправа 6: ланцюжок промісів

// Напишіть функцію fetchData, яка:
// Отримує список дописів з JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts).
// Використовує ідентифікатор першої публікації для отримання коментарів до цієї публікації (https://jsonplaceholder.typicode.com/comments?postId=1).
// Зареєструйте назву першої публікації та кількість коментарів до неї.
 async function fetchData() { 
    try{
   const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = postsResponse.data; 
        const firstPostId = posts[0].id; 
        const firstPostTitle = posts[0].title;
         const commentsResponse = await axios.get('https://jsonplaceholder.typicode.com/postId' + firstPostId);
             const comments = commentsResponse.data; 
        
    } catch(error) {
        console.log (error); 
    }
    }
    fetchData()
