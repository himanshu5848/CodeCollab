import "./App.css";
function Room({ roomId }) {
  return (
    <div className="room-page">
      <header className="room-header">
        <h1>CodeCollab</h1>

        <div className="room-info">
          <span>Room: {roomId}</span>
          <span>👤 1 User</span>
        </div>
      </header>

      <div className="room-content">
        <section className="problem-panel">
          <h2>Two Sum</h2>

          <p>
            Given an array of integers, return the indices of the two numbers
            such that they add up to a specific target.
          </p>

          <h3>Example</h3>

          <pre>
            Input: nums = [2,7,11,15], target = 9{"\n"}
            Output: [0,1]
          </pre>

          <h3>Constraints</h3>

          <ul>
            <li>2 ≤ nums.length ≤ 10⁴</li>
            <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
            <li>Only one valid answer exists.</li>
          </ul>
        </section>

        <section className="editor-panel">
          <div className="editor-header">
            <span>C++</span>
          </div>

          <textarea
            className="code-editor"
            placeholder="Write your C++ code here..."
          ></textarea>

          <div className="editor-actions">
            <button>Run Code</button>
            <button>Submit</button>
          </div>
        </section>
      </div>

      <section className="output-panel">
        <h3>Output</h3>

        <p>No output yet.</p>
      </section>
    </div>
  );
}

export default Room;
