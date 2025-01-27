const App = () => {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#beb8f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => alert("div clicked!")}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("button clicked!");
        }}
      >
        Click Me!
      </button>
    </div>
  );
};

export default App;
