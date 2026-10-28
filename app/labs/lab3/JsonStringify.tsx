export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const myObject = { hi: "there", count: 7 };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })} <br />
      myObject = {JSON.stringify(myObject)}
      <hr />
    </div>
  );
}
