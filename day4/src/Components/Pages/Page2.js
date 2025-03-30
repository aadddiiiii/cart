import Page3 from "./Page3";

function Page2() {
  const style = {
    border: "1px solid black",
    margin: "50px 50px 50px 50px",
    padding: "50px 50px 50px 50px",
  };
  return (
    <div style={style}>
      <h1>Page 2</h1>
      <Page3/>
    </div>
  );
}

export default Page2;