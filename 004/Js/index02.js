const RChild = ({ className, v1, v2, id }) => {
    console.log(v2);
    return React.createElement("p", { className: className, id: id}, v1);
};
const SubComponeent = () => {
    return React.createElement("div", null,[
        React.createElement(RChild, {
            className:"test",
            v1: "hello world",
            v2: "world",
        })
    React.createElement(RChild, (v1: "hello world 2", id:"testId")),
    ]);
};

const RChild = (props) => {
    return React.createElement("p", null, props.v1);
};
const SubComponeent = () => {
  return React.createElement("div", null, [
    React.createElement(RChild, { v1: "hello world" }),
    React.createElement(RChild, { v1: "hello world 2" }),
  ])
}

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Hello, world!"),
    React.createElement("p", null, "This is a paragraph."),
  ]);
};

const App = () => {
    return React.createElement("div", null, React.createElement(SubComponeent));
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));