import { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import {redirect, useNavigate, useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./UpdateNote.module.css";

let message =
  "Are you shure you want to leave the form?";

const UpdateNote = (props) => {

  const [isEntering, setIsEntering] = useState(false);
  const { id } = useParams();
  const [noteId, setNoteId] = useState(id);
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  // const history = useHistory();
  const navigate = useNavigate();

  

    async function updateNote() {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titleInputRef.current.value,
          content: contentInputRef.current.value,
        }),
      };
      const response = await fetch(
        `http://localhost:8080/api/notes/${noteId}`,
        requestOptions
      );
      const data = await response.json();
      setNoteId(data.id);
    }

  const {sendRequest, status} = useHttp(updateNote);

    useEffect(() => {
        if(status === 'completed'){
            navigate('/notes')
        }
    },[status, navigate])



  const sumbitNoteHandler = (event) => {
    event.preventDefault();
    sendRequest()
    // history.push('/notes');
    // const enteredTitle = titleInputRef.current.value;
    // const enteredContent = contentInputRef.current.value;

    // props.onEdit({title: enteredTitle, content: enteredContent })

   
  };

  const formFocusHandler = () => {
    console.log("Focus!");
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  

  return (
    <Fragment>
      <Card>
        {/* <Prompt when={isEntering} message={(location) => message} /> */}
        <form
          onSubmit={sumbitNoteHandler}
          onFocus={formFocusHandler}
          className={classes.form}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div>
            <input
              type="text"
              name="title"
              placeholder="New title ..."
              ref={titleInputRef}
            />
          </div>
          <div>
            <input
              type="text"
              name="content"
              placeholder="New content ..."
              ref={contentInputRef}
            />
          </div>
          <div>
            <button onClick={finishEnteringHandler}> Edit </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default UpdateNote;
