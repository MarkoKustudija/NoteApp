import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";


function App (){
    return(
        <div>
        <Header/>
        <CreateArea />
        <Note key = {1} title = "Note title" content = "Note content"/>
        <Footer/>
        </div>
        
    );
}

export default App;