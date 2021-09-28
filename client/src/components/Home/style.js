import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: "10vh",
  },
  appBarSearch: {
    position: "relative",
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    justifyContent: "space-between",
    zIndex: 1,
  },
  buttonSearch: {
    marginTop: 8,
    color: "#FFFDFD",
    backgroundColor: "#10004D",
    "&:hover": {
      backgroundColor: "#10004D",
    },
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
