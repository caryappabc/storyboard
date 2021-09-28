import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: "3px",
    backgroundColor: "#FFFDFD",
    color: "#7B5E7B",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  clearButton: {
    marginBottom: 10,
    color: "black",
    backgroundColor: "#DDDDDD",
    "&:hover": {
      backgroundColor: "#FAFAFA",
    },
  },
  buttonSubmit: {
    marginBottom: 10,
    color: "white",
    backgroundColor: "#10004D",
    "&:hover": {
      backgroundColor: "#10004D",
    },
  },
}));
