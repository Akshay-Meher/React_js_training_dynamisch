import { useState } from "react";
import UserForm from "./UserForm";
import FilterUser from "./FilterUser";

const usersArr = [
    { id: 1, name: 'John Doe', address: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Jane Smith', address: null },
    { id: 3, name: 'Bob Johnson', address: { city: 'London', country: 'UK' } },
    { id: 4, name: 'Akshay Meher', address: { city: 'Pune', country: 'India' } },
    { id: 5, name: 'Aditya Madhare', address: { city: 'Satara', country: 'India' } },
    { id: 6, name: 'Shubham Chawan' },
];

function UserList() {

    const [users, setUsers] = useState(usersArr);

    let data = users.map((user) => (

        <li key={user.id} className=" border-2 bg-green-400 border-2 border-black rounded-lg p-2 w-1/6">
            <h3 className="  bg-fuchsia-700 m-1 p-1">name: {user.name}</h3>
            {user.address ? (
                <p className=" bg-green-600 m-1 p-1">
                    City: {user.address.city},
                    Country: {user.address?.country || 'N/A'}
                </p>
            ) : (
                <p className=" text-red-600">No address available</p>
            )}
        </li>

    ))

    return (

        <div className=" bg-yellow-300 m-4 p-10 border-4">

            <div>
                <UserForm setUsers={setUsers} />
                <FilterUser users={usersArr} setUsers={setUsers} />
            </div>

            <div>
                <ul className=" flex gap-3 flex-wrap justify-center">
                    {data}
                </ul>
            </div>
        </div>
    )
};

export default UserList;
