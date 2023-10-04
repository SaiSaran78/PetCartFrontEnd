import React from "react";
import Header from "./Header/Header";
import "./Page404.css";
const Page404 = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div>
        <h1 className="PA">PetAnimals</h1>
        <h2 className="Error404">Error 404. That’s an error.</h2>
        <h3 className="Errormsg">
          The requested URL was not found on this server.
        </h3>
      </div>
    </div>
  );
};
export default Page404;
