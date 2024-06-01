import { io } from 'socket.io-client';

const socketInit = () => {

    return io('http://localhost:5500');
};

export default socketInit;
