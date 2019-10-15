import React, { useEffect, useState } from "react";

export default function Effect() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (username) {
      fetch(`http://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => setImage(data.avatar_url));
    }
  }, [username]);
  return (
    <>
      <input type="text" onBlur={e => setUsername(e.target.value)} />
      {image && username ? (
        <img src={image} alt={username} />
      ) : username ? (
        "Usuario não encontrado"
      ) : (
        ""
      )}
    </>
  );
}
