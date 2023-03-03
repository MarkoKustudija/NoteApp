import { Link } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./NoNotesFound.module.css";

const NoNotesFound = () => {
    return ( 
            <Card className={classes.nonotes}>
              <h1> 404 - No notes found!</h1>
              <Link className='btn' to = "/notes/new">
                Add New Note
              </Link>
            </Card>
          );
}
 
export default NoNotesFound;