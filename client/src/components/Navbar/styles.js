import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: "1vh",
    display: "flex",
    height: "9vh",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    zIndex: 10,
    borderBottom: "1px solid #fff",
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
    color: "#000000",
  },
  user: {
    display: "flex",
    justifyContent: "space-between",
  },
  logout: {
    backgroundColor: "#7B5E7B",
    "&:hover": {
      backgroundColor: "#7B5E7B",
    },
  },
  login: {
    backgroundColor: "#10004D",
  },
  brandContainer: {
    marginLeft: 10,
    display: "flex",
    width: "100%",
    height: "100%",
  },
  brandlogo: {
    width: "50px",
    height: "100%",
    borderRadius: "30%",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
