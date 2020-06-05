import React from 'react';
import Heading from "./components/layout/Heading.js";
import Paragraph from "./components/layout/Paragraph.js";
import Layout from "./components/layout/Layout.js";
import './App.css';
import "./css/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


function App() {
  return (
    <Layout>
      <Heading title="Title from prop" subtitle="Subtitle from prop" />
      <Paragraph>This will be the children prop inside the component.</Paragraph>
    </Layout>
  );
}

export default App;