import { Link } from "react-router-dom";

function Page2() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <p>This is page 2!</p>
      <Link to="/">Home</Link>
    </main>
  );
}

export default Page2;