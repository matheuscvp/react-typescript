import React, { useState, useMemo, useCallback, useRef, useReducer } from 'react';
import './App.css';

interface User {
  name: string;
  login: string;
  avatar_url:string;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [users, setUser] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', '), [users]);
  const greeting = useCallback(
    (user: User) => alert(`Hello ${user.name}`),
    []
  )

  function focusOnInput() {
    inputRef.current?.focus();
  }

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  );
}

export default App;
