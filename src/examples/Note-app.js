import { useState, useEffect, useReducer } from "react";
import "../styles/style.css";

const notesReducer = (state, action) => {
    switch(action.type){
        case 'POPULATE_NOTES':
            return action.notes
        case 'ADD_NOTE':
            return [
                ...state,
                {title: action.title,body: action.body}
            ]
        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title)
        default:
            return state
    }
}

const NoteApp = () => {
  //const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loaded, setLoaded] = useState("");

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      dispatch({type: 'POPULATE_NOTES', notes: notesData})
    }
    setLoaded(true)
  }, []);

  useEffect(() => {
    if(loaded){
        localStorage.setItem("notes", JSON.stringify(notes))
    }
  }, [notes]);

  const addNote = (e) => {
    e.preventDefault();
    if (title) {
    //   setNotes([...notes, { title, body }]);
    dispatch({
        type: 'ADD_NOTE',
        title,
        body
    })
      setTitle("");
      setBody("");
    }
  };
  const removeNote = (title) => {
    //setNotes(notes.filter((note) => note.title !== title));
    dispatch({
        type: 'REMOVE_NOTE',
        title
    })
  };

  return (
    <div className="container p-5">
      <div className="card mb-3">
        <div className="card-header">Notes</div>
        {notes && (
          <table className="table table-sm table-striped mb-0">
            <tbody>
              {notes.map((note) => (
                <tr key={note.title}>
                  <td style={{ width: "40%" }}>{note.title}</td>
                  <td>{note.body}</td>
                  <td style={{ width: "3%" }}>
                    <button
                      onClick={() => removeNote(note.title)}
                      className="btn btn-sm btn-danger"
                    >
                      <i className="far fa-times"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="card mb-3">
        <div className="card-header">Add a New Note</div>
        <div className="card-body">
          <form onSubmit={addNote}>
            <div className="form-group">
            <p className="mx-1 ">Başlık</p>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control "
              ></input>
            </div>
            <div className="form-group mt-3">
                <p className="mx-1 ">Metin</p>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="form-control"
              ></textarea>
            </div>
            <button className="btn btn-primary btn-block mt-2">Add Note</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoteApp;
