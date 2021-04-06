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
    backgroundColor: "#F3F5F7",
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
    backgroundColor: "#DDDBF1",
    "&:hover": {
      color: "white",
      backgroundColor: "#2A2F3C",
    },
  },
  buttonSubmit: {
    marginBottom: 10,
    color: "white",
    backgroundColor: "#3C4F76",
    "&:hover": {
      color: "black",
      backgroundColor: "#6F7B9B",
    },
  },
}));
