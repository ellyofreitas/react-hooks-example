import React, { useState } from "react";

export default function State() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>{`Hi ${name}`}</h1>
      <input type="text" onChange={e => setName(e.target.value)} />
    </>
  );
}
