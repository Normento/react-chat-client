import React, { useEffect } from 'react';
import echo from './echo';

function App() {
  useEffect(() => {
        const userId = `1a210c78-54a3-4ac2-9dcd-5aafb60f0b39`;
        const channel = echo.private('chat.' + userId); 

        channel.listen('NewMessageEvent', (e) => {
            console.log('Received data:', e);
        });

        return () => {
            channel.stopListening('NewMessageEvent');
        };
    }, []);

    return <div className="App">Listening events...</div>;
}

export default App;

