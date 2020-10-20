import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./components/Card";
import Pname from "./components/Pname";
import "./index.css";



ReactDOM.render(
<>
<h1 className="heading_style">Newly arrived perfumes</h1>

{Pname.map(function pname(val) {
    return (

    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    pname={val.pname}
    link={val.link}
    />
    );

})}
</>, 
document.getElementById("root")

);
