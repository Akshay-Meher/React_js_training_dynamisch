import { useEffect, useState } from "react";

function FilterUser({ setUsers, users }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('name');

    useEffect(() => {

        let duplicateUsers = [...users];

        if (selectedFilter === 'name') {
            duplicateUsers.sort((a, b) => {
                let aName = a.name.toLowerCase();
                let bName = b.name.toLowerCase();
                if (aName < bName) return -1;
                if (aName > bName) return 1;
                return 0;
            });
            setUsers(duplicateUsers);
        } else if (selectedFilter === 'city') {
            duplicateUsers.sort((a, b) => {
                let aCity = a.address?.city?.toLowerCase();
                let bCity = b.address?.city?.toLowerCase();
                if (aCity < bCity) return -1;
                if (aCity > bCity) return 1;
                return 0;
            });
            setUsers(duplicateUsers);
        } else if (selectedFilter === 'country') {
            duplicateUsers.sort((a, b) => {
                let aCountry = a.address?.country?.toLowerCase();
                let bCountry = b.address?.country?.toLowerCase();
                if (aCountry < bCountry) return -1;
                if (aCountry > bCountry) return 1;
                return 0;
            });
            setUsers(duplicateUsers);
        }


    }, [selectedFilter])

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
        filterAndSetUsers(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const filterAndSetUsers = (query) => {
        // console.log('query', query)
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
        // console.log('filter', filteredUsers, query)
        setUsers(filteredUsers);
    };

    console.log('selectedFilter');
    console.log(selectedFilter);
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="m-2 border-2 border-black text-black"
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            <select
                className="m-2 border-2 border-black text-black"
                value={selectedFilter}
                onChange={handleSelectChange}
            >
                <option value="name">Sort By Name</option>
                <option value="city">Sort By City</option>
                <option value="country">Sort By Country</option>
            </select>
        </div>
    );
}

export default FilterUser;
