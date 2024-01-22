# ReactJS

### Possible way to write react code using core react 
```
// React Element
const heading = React.createElement("h1",{id:"heading"},"React JS"); // first parameter is tag, second attribute and child

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

# Parcel
- Dev Build
- Local Server
- HMR = Hot module replacement
- File Watching algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- Https
- Tree Shaking - Remove unused code
- Different dev and prod bundles

# JSX
JSX is HTML or XML-like Syntax.
JSX gets transpiled before it reaches to JS engine -PARCEL - Babel
JSX=>React.createElement => Object => HTML
JSX uses camelCasing

# Babel
It is javascript compiler
Babel transcompiles the javascript code to react code.
Babel converts JSX code into React.createElemnent code.

# Components
1. Class Based Components - Old
2. Functional Components - New

# React Router Dom


these can be avoided using lazy loading
# Chunking
# Code Splitting
# Dynamic Bundling
# Lazy loading
# Ondemand loading


# Code example
```
// React Element
const heading=<h1 id="heading">React JS using HSX</h1>;

// React Functional Component
const Title=()=>{
  return (
    <h1 className="title">React JS using JSX</h1>
  );
}

const number=10000;
// Component Composition
const HeadingComponent=()=> (
  <div className="container">
    <Title />
    <h2>{number}</h2>
    <h2 className="heading">React Functional Component</h2>
  </div>
  
);
```
# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect store to app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing/ React testing library and Jest
- Unit testing
- Integration testing
- End to end testing(E2E)

# Setting up testing
- Install react testing library
- Install jest
- Install Babel dependencies
- Configured Babel
- Configured Parcel config file to disable default babel transpilation
