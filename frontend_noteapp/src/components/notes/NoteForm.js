import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NoteForm.module.css";

const NoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const titleInputRef = useRef();
  const contentInputRef = useRef();

  const sumbitNoteHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredContent = contentInputRef.current.value;

    props.onAdd({ title: enteredTitle, content: enteredContent });
  };

  const formFocusHandler = () => {
    console.log("Focus!");
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  let message =
    "Are you shure you want to leave the form? All your data will be lost!!!";

  return (
    <Fragment>
      <Card>
        <Prompt when={isEntering} message={(location) => message} />
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
              id="title"
              ref={titleInputRef}
              placeholder="Title ..."
            />
          </div>
          <div>
            <textarea
              type="text"
              id="content"
              ref={contentInputRef}
              rows="3"
              maxLength="280"
              placeholder="Content ..."
            />
          </div>

          <div>
            <button onClick={finishEnteringHandler}> Add</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default NoteForm;
