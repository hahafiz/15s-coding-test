import { useState, useRef } from "react";

export function CodeSnippet() {
  const [copyBtn, setCopyBtn] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  async function copyText(): Promise<void> {
    try {
      const text = preRef.current?.innerText || "";
      setIsCopied(true);
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard", text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setCopyBtn(true)}
      onMouseLeave={() => {
        setCopyBtn(false);
        setIsCopied(false);
      }}
    >
      {copyBtn && (
        <button
          className="absolute top-0 right-0 bg-blue-500 px-4 py-2 m-4"
          onClick={() => copyText()}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      )}

      <pre ref={preRef} className="bg-gray-800 p-8 rounded-md text-white">
        {`result = `}
        <span className="text-red-500">0</span> <br />
        <span className="text-blue-400 font-bold inline-block">for</span> x
        <span className="text-blue-400 font-bold"> in</span> [
        <span className="text-red-500">3</span>,
        <span className="text-red-500">3</span>,
        <span className="text-red-500">5</span>
        ]: <br />
        <span className="text-blue-400 font-bold indent-8 inline-block">
          if
        </span>{" "}
        {`x >`}
        <span
          area-hidden="true"
          className="aria-hidden text-[0px] opacity-0 select-text"
        >
          =
        </span>
        <span className="text-red-500"> 3</span>:
        <br />
        <span className="indent-16 inline-block">result = result - x</span>
        <br />
        <span className="text-blue-400 font-bold indent-8 inline-block">
          else:{" "}
        </span>{" "}
        <br />
        <span className="indent-16 inline-block">result = result + x</span>
      </pre>
    </div>
  );
}
