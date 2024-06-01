import React from 'react';
import ws from './ws-common';

/* When a user joins, I notify the
server that a new user has joined to edit the document. */
export default function LoginSection({ onLogin }) {
  const [username, setUsername] = useState('');
  useWebSocket(WS_URL, {
    share: true,
    filter: () => false
  });
  function logInUser() {
    if(!username.trim()) {
      return;
    }
    onLogin && onLogin(username); // Triggers sendJsonMessage in App
  }
  // ----
  // ----
}
/* When content changes, we send the
current content of the editor to the server. */
function handleHtmlChange(e) {
  sendJsonMessage({
    type: 'contentchange',
    content: e.target.value
  });
}

return (
  <DefaultEditor value={html} onChange={handleHtmlChange} />
);