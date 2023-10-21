import { useState } from 'react';

function Following() {
  const [followers, setFollowers] = useState(null);

  return (
    <div>
      {followers.map((follower) => (
        <h1 onClick={setFollowers(null)}>{follower.name}</h1>
      ))}
    </div>
  );
}

export default Following;
