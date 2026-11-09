"use client";

const hello = () => {
  alert("Hello World!");
};

const hiThere = () => {
  alert("Hi there, Alan Nguyen!");
};

const goodbye = () => {
  alert("Goodbye World!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="me-2 rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <button
        type="button"
        onClick={hiThere}
        id="wd-onclick-hi-there"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hi There
      </button>
      <hr />
    </div>
  );
}
