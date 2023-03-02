import { Link } from "react-router-dom";
import PageContent from "./PageContent";
import Card from "./UI/Card";

const Home = () => {
  return (
    <Card>
      <PageContent>
        
        <h1> Welcome to Home Page</h1>

        <p>This is the Note App where you can add your notes...</p>
        <p>
          If you want to manage your notes, you can edit, delete or add the new
          one...
        </p>

        <Link to="/notes">
          <h3>Go to Notes</h3>
        </Link>

      </PageContent>
    </Card>
  );
};

export default Home;
