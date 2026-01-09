import "./App.css";
import { CodeSnippet } from "./components/code-snippet";
import { Answer } from "./components/answer";

function App() {
  return (
    <>
      <div className="flex flex-col gap-8 mb-8 max-w-lg text-center">
        <h1>15s Coding Test</h1>
        <p>
          This is a test used by a Canadian ex-CTO, Jose Zarazua to filter out
          unqualified applicants for a remote position where the challenge is to
          filter out the bad ones because you'll have hundreds of applicants.
        </p>
      </div>
      <CodeSnippet />
      <Answer />
    </>
  );
}

export default App;
