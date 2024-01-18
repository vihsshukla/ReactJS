const parent=React.createElement(
  "div",
  {id:"parent"},
  React.createElement("div",
            {id:"child"},
            [React.createElement( //returns object
                      "h1",{
                        id:"heading"
                      },
                      "I am h1 tag."),React.createElement( //returns object
                      "h2",{
                        id:"heading"
                      },
                      "I am h2 tag.")]
                      ) 
                      );

// const heading=React.createElement( //returns object
//   "h1",{
//     id:"heading"
//   },
//   "Hello world from react.");//second parameter is used to pass attributes
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);