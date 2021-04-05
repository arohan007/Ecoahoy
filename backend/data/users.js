import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Arohan',
        email: 'arohan@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true

    },
    {
        name: 'Pooja',
        email: 'pooja@gmail.com',
        password: bcrypt.hashSync('123456',10), 
       

    },
    {
        name: 'Prashant',
        email: 'prashant@gmail.com',
        password: bcrypt.hashSync('123456',10),
       

    }

]
export default users