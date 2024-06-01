import React, { useState, useEffect } from 'react';
import AddRoomModal from '../../components/AddRoomModal/AddRoomModal';
import RoomCard from '../../components/RoomCard/RoomCard';
import styles from './Rooms.module.css';
import { getAllRooms } from '../../http';

const sampleRooms = [
    // {
    //     id: 1,
    //     topic: 'Which framework best for frontend ?',
    //     speakers: [
    //         {
    //             id: 1,
    //             name: 'Jeremy Smith',
    //             avatar: '/images/monkey-avatar.png',
    //         },
    //         {
    //             id: 2,
    //             name: 'Jane Williams',
    //             avatar: '/images/monkey-avatar.png',
    //         },
    //     ],
    //     totalPeople: 3,
    // },
    // {
    //     id: 3,
    //     topic: 'What’s new in machine learning?',
    //     speakers: [
    //         {
    //             id: 1,
    //             name: 'Shunen Xian',
    //             avatar: '/images/monkey-avatar.png',
    //         },
    //         {
    //             id: 2,
    //             name: 'Victor Chopiec',
    //             avatar: '/images/monkey-avatar.png',
    //         },
    //     ],
    //     totalPeople: 12,
    // },
    // {
    //     id: 4,
    //     topic: 'Why people use stack overflow?',
    //     speakers: [
    //         {
    //             id: 1,
    //             name: 'Amanda Wilson',
    //             avatar: '/images/monkey-avatar.png',
    //         },
    //         {
    //             id: 2,
    //             name: 'Jose Gonzalez',
    //             avatar: '/images/monkey-avatar.png',
    //         },
    //     ],
    //     totalPeople: 7,
    // },
    // {
    //     id: 5,
    //     topic: 'Artificial inteligence is the future?',
    //     speakers: [
    //         {
    //             id: 1,
    //             name: 'Ahmed Nassif',
    //             avatar: '/images/monkey-avatar.png',
    //         },
    //         {
    //             id: 2,
    //             name: 'Hao Nguen',
    //             avatar: '/images/monkey-avatar.png',
    //         },
    //     ],
    //     totalPeople: 2,
    // },
];

const Rooms = () => {
    const [showModal, setShowModal] = useState(false);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const { data } = await getAllRooms();
            if (data.length > 0) {
                setRooms(data);
            } else {
                setRooms(sampleRooms);
            }

        };
        fetchRooms();
    }, []);
    function openModal() {
        setShowModal(true);
    }
    return (
        <>
            <div className="container">
                <div className={styles.roomsHeader}>
                    <div className={styles.left}>
                        <span className={styles.heading}>All voice rooms</span>
                        <div className={styles.searchBox}>
                            <img src="/images/search-icon.png" alt="search" />
                            <input type="text" className={styles.searchInput} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <button
                            onClick={openModal}
                            className={styles.startRoomButton}
                        >
                            <img
                                src="/images/add-room-icon.png"
                                alt="add-room"
                            />
                            <span>Start a room</span>
                        </button>
                    </div>
                </div>

                <div className={styles.roomList}>
                    {rooms.map((room) => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>
            {showModal && <AddRoomModal onClose={() => setShowModal(false)} />}
        </>
    );
};

export default Rooms;
