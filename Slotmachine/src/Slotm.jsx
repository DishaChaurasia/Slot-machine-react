
import React from "react";




const SlotM = (props) =>
{
   
     let x=props.x;
     let y=props.y;
     let z=props.z;

     if((x==y)&&(y==z))
     {
        return (
            <>
            <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is Matching</h1>
            </>
        );
     }
     else{
        return (
            <>
             <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is not Matching</h1>
            </>
        );
     }

}

export default SlotM;
