import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "#3C4F76",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "300px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    width: "300px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    paddingLeft: "10px",
  },
  user: {
    display: "flex",
    justifyContent: "space-between",
  },
  logout: {
    backgroundColor: "#984447",
    "&:hover": {
      fontWeight: "bold",
      backgroundColor: "#C07275",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
