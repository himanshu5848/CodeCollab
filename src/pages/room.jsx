function Room({ roomId }) {
  return (
    <div >
      <h1>CodeCollab Room</h1>

      <p>Room ID: {roomId}</p>

      <h2>Welcome to the coding room!</h2>

      <div>
        <h3>Problem</h3>
        <p>Two Sum</p>
      </div>

      <div>
        <h3>Code Editor</h3>

        <textarea
          rows="15"
          cols="80"
          placeholder="Write your code here..."
        ></textarea>
      </div>

      <button>Run Code</button>
      <button>Submit</button>
    </div>
  );
}

export default Room;
