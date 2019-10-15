import React, { useMemo, useState } from "react";

export default function Memo() {
  const [age, setAge] = useState(0);
  const yearBorn = useMemo(
    () => (age ? `You born in ${2019 - age}` : "Type how many old you"),
    [age]
  );
  return (
    <>
      <h1>{yearBorn}</h1>
      <input type="number" onChange={e => setAge(e.target.value)} />
    </>
  );
}
