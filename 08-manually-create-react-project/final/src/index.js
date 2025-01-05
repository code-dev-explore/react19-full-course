import ReactDOMClient from "react-dom/client";

// simulate some data
const data = ["React", "Angular", "Vue"];

// step2. create virtual DOM
const element = (
  <>
    <h1>JS Frontend Frameworks:</h1>
    <ul>
      {data.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  </>
);

// step3. get the root container
const root = document.getElementById("root");

// step4. rendering element on the root container
ReactDOMClient.createRoot(root).render(element);
