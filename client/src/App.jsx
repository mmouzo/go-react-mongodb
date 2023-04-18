import React from "react";

const App = () => {
  return (
    <div className="container">
      <h1 className="is-size-1">Ola, Go!</h1>
      <button onClick={async () => {
        const response
          = await fetch('http://localhost:3000/users')
        const data = await response.json()
        console.log(data)

      }} class="button is-rounded">Obter datos</button>
    </div>
  );
};

export default App;
