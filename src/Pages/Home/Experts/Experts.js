import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import mechanic6 from '../../../images/mechanic/mechanic-6.jpg';
import mechanic7 from '../../../images/mechanic/mechanic-7.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        id: 1,
        name: 'Jony Liver',
        img: mechanic1,
        expertize: 'Bangla Expert'
    },
    {
        id: 2,
        name: 'Raju Pagla',
        img: mechanic2,
        expertize: 'English Expert'
    },
    {
        id: 3,
        name: 'Tajul Pagla',
        img: mechanic3,
        expertize: 'Hindi Expert'
    },
    {
        id: 4,
        name: 'Motka Yasin',
        img: mechanic4,
        expertize: 'Japanese Expert'
    },
    {
        id: 5,
        name: 'Yasin Chikna',
        img: mechanic5,
        expertize: 'Polish Expert'
    },
    {
        id: 6,
        name: 'Mahmud Hossain',
        img: mechanic6,
        expertize: 'Arabic Expert'
    },
    {
        id: 7,
        name: 'Pagol and Sagol',
        img: mechanic7,
        expertize: 'Odia Expert'
    }
]

const Experts = () => {
    return (
        <div id="experts" className='container'>
            <div>
                <h2 className='text-primary'>Our Experts</h2>
                <div className='row'>
                    {
                        experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;