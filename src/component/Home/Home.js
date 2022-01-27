import React from 'react';
import Room from '../Room/Room';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between',
    }
    const rooms = [
        {
            title: "Standard Single Room",
            description: 'Standard Single Rooms are designed in open - concept living area and have many facilities.',
            imgUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            bed: 1,
            capacity: 1,
            bedType: 'single',
            avatar: 'S',
            price: 119
        },
        {
            title: "Couple Power Room",
            description: 'Superior Double Rooms are perfect equipped for traveling couples of friends.',
            imgUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            bed: 1,
            capacity: 2,
            bedType: 'Double',
            avatar: 'D',
            price: 149
        },
        {
            title: "Family Capacity Room",
            description: 'Have lots of in-room facilities and are',
            imgUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            bed: 2,
            capacity: 4,
            bedType: 'Family',
            avatar: 'F',
            price: 199
        }
    ];
    return (
        <div style={style}>
            {
                rooms.map(room => <Room key={room.bedType} room={room}></Room>)
            }
        </div>
    );
};

export default Home;