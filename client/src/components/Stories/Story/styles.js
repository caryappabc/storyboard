import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    height: "100%",
    position: "relative",
    backgroundColor: "#F0F0F0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: "#236290",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "black",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  like: {
    backgroundColor: "#FCF7F8",
    "&:hover": {
      fontWeight: "bold",
      backgroundColor: "#37486D",
    },
  },
  edit: {
    backgroundColor: "#EBEBEB",
    "&:hover": {
      fontWeight: "bold",
      backgroundColor: "#E7EAEE",
    },
  },
  delete: {
    backgroundColor: "#984447",
    "&:hover": {
      fontWeight: "bold",
      backgroundColor: "#C07275",
    },
  },
  user: {
    maxWidth: "50px",
    maxHeight: "50px",
  },
}));
