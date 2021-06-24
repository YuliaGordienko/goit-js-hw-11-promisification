// Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback,
//     а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {
         
            resolve (allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        ))
        })
        
}

 


const logger = result => console.table(result)

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
