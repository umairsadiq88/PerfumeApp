import React from 'react';
import Card from "./components/Card";
import Pname from "./components/Pname";




const Carddetail = () => {
    return (
        <div>
            
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

</div>
    )
}


export default Carddetail;