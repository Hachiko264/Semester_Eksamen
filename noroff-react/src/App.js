import React from 'react';
import Heading from "./components/layout/Heading.js";
import Paragraph from "./components/layout/Paragraph.js";
import Layout from "./components/layout/Layout.js";
import './App.scss';
import "./sass/style.scss";


function App() {
    return (
        <div className="App">
          <Heading title="Title from prop" subtitle="Subtitle from prop" />
          <Paragraph>
            This will be the children prop inside the component.
          </Paragraph>
        </div>
    );
}

export default App;