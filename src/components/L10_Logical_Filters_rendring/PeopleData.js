import React, { useEffect, useState } from 'react';
import data from './data';
// import data1 from './data1';
import PeopleCard from './PeopleCard';
import FilterPeople from './FilterPeople';

function PeopleData() {

    const [peoples, setPeoples] = useState(data);

    const maxSalery = peoples.reduce((acc, people) => {
        return acc > people.salary ? acc : people.salary
    }, 0);
    console.log('maxSalery', maxSalery);

    return (
        <div className=' border-4 border-black bg-lime-600 rounded-md m-4 p-4' >
            <div>
                <FilterPeople
                    setPeoples={setPeoples}
                    peoples={data}
                />
            </div>
            <div className=' flex flex-wrap'>
                {console.log('peoples')}
                {console.log(peoples)}
                {/* {peoples?.length == 0
                    ?
                    data?.map((people) => <PeopleCard key={people.id} people={people} />)
                    :
                    peoples?.map((people) => <PeopleCard key={people.id} people={people} />)
                } */}

                {
                    peoples?.map((people) => <PeopleCard key={people.id} people={people} maxSalery={maxSalery} />)
                }
            </div>
        </div>
    )
}

export default PeopleData