use('CrudDB')
db.createCollection('users')
db.users.insertOne({
    name: 'Anik Ghosh',
    age: 25,
    email: 'anikgh7@gmail.com',
    address: {
        street: '124,2nd house',
        city: 'Dhaka',
        state: 'Dhaka',
        country: 'Bangladesh',
    }
})
db.users.insertMany([
    {
        name: 'Anik Ghosh',
        age: 25,
        email: 'anikgh7@gmail.com',
        address: {
            street: '124, 2nd house',
            city: 'Dhaka',
            state: 'Dhaka',
            country: 'Bangladesh'
        }
    },
    {
        name: 'Sara Ahmed',
        age: 28,
        email: 'sara.ahmed@example.com',
        address: {
            street: '56, Lake View Road',
            city: 'Chittagong',
            state: 'Chittagong',
            country: 'Bangladesh'
        }
    },
    {
        name: 'Mohammad Hasan',
        age: 30,
        email: 'm.hasan123@example.com',
        address: {
            street: '88, Green Street',
            city: 'Khulna',
            state: 'Khulna',
            country: 'Bangladesh'
        }
    },
    {
        name: 'Priya Das',
        age: 22,
        email: 'priya.das@example.com',
        address: {
            street: '11, Rose Garden',
            city: 'Rajshahi',
            state: 'Rajshahi',
            country: 'Bangladesh'
        }
    },
    {
        name: 'Rifat Karim',
        age: 27,
        email: 'rifatkarim@example.com',
        address: {
            street: '77, Sunset Boulevard',
            city: 'Sylhet',
            state: 'Sylhet',
            country: 'Bangladesh'
        }
    },
    {
        name: 'Nadia Islam',
        age: 24,
        email: 'nadiaislam@example.com',
        address: {
            street: '19, Park Lane',
            city: 'Barisal',
            state: 'Barisal',
            country: 'Bangladesh'
        }
    },
    {
        name: 'Tanvir Hossain',
        age: 29,
        email: 'tanvir.hossain@example.com',
        address: {
            street: '35, Sunshine Street',
            city: 'Rangpur',
            state: 'Rangpur',
            country: 'Bangladesh'
        }
    },
    {
        name: 'Mithila Rahman',
        age: 26,
        email: 'mithila.rahman@example.com',
        address: {
            street: '66, Hilltop Avenue',
            city: 'Dhaka',
            state: 'Dhaka',
            country: 'Bangladesh'
        }
    },
    {
        name: 'Farhan Siddiqui',
        age: 31,
        email: 'farhan.siddiqui@example.com',
        address: {
            street: '12, Ocean Drive',
            city: 'Chittagong',
            state: 'Chittagong',
            country: 'Bangladesh'
        }
    },
    {
        name: 'Labiba Chowdhury',
        age: 23,
        email: 'labiba.chowdhury@example.com',
        address: {
            street: '5, Garden Road',
            city: 'Mymensingh',
            state: 'Mymensingh',
            country: 'Bangladesh'
        }
    }
]
)
//read
let a = db.users.find({ "address.city": 'Dhaka' });
console.log(a.count())

//update
db.users.updateMany(
    {'address.country':'Bangladesh'},
    {$set:{"address.country":'India'}}
)

//Delete
db.users.deleteMany(
    {name:'Anik Ghosh'}
)
//https://www.mongodb.com/docs/manual/reference/operator/query/
