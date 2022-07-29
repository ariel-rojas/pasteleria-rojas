import React from "react";

const UnmountExample = () => {
    const onSubmitHandler = (e) =>{
        console.log(e)
    }
    return (
        <>
        <h1 id="title">
            Test
        </h1>
        <form action="" onSubmit={onSubmitHandler}>
            <input type="text" />
            <button type="submit"> Submit Form</button>
        </form>
        </> 

     );
}
 
export default UnmountExample;