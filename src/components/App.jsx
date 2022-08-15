import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newText, setNewText] = useState([]);

  function onAdd(newNote) {
    setNewText((prev) => {
      return [...prev, newNote];
    });
  }

  function neDelete(id) {
    setNewText((prev) => {
      return prev.filter((newest, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea clicked={onAdd} />
      {newText.map((newest, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newest.title}
            content={newest.content}
            deleted={neDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
