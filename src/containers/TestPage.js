import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../reducers/auth";
import { decrement, increment, incrementByAmount } from "../reducers/counter";
import "../styles/index.css";

function Test() {
  const [name, setName] = useState("");
  const { value } = useSelector((state) => state.counter);
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    dispatch(login(name));
    setName("");
  }

  return (
    <div className="container">
      <h1> Hello React 💙</h1>
      <Link to="/">Home</Link>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>counter: {value}</span> &nbsp;
        <button onClick={() => dispatch(decrement())}>-</button> &nbsp;
        <button onClick={() => dispatch(incrementByAmount(10))}>
          inc by amount
        </button>
        &nbsp;
        <br />
        <div>
          {isLoggedIn ? (
            <div>
              <h3>User: {user}</h3>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;
