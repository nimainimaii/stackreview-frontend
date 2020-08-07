import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link"
import { Button } from "@material-ui/core";
import {Add} from "@material-ui/icons";

const Logout = () => {
  return (
    <Link href="NewPost">
    <Button style={{display: "flex", alignItems: "center", backgroundColor: "lightgrey"}}>
        <div style={{marginRight: "10px", marginTop: "5px"}}>
          {"Post Code Snippet"}
        </div>
      <Add />
    </Button>
    </Link>
  );
};

export default Logout;