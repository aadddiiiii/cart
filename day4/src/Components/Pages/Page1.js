import Page2 from "./Page2";

function Page1() {
  const style = {
    border: "1px solid black",
    margin: "50px 50px 50px 50px",
    padding: "50px 50px 50px 50px",
  };
  return (
    <div style={style} >
      <h1>Page 1</h1>
      <Page2 />
    </div>
  );
}

export default Page1;