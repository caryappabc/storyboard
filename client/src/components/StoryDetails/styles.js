import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "5px",
    objectFit: "contain",
    width: "100%",
    maxHeight: "500px",
  },
  cardContainer: {
    padding: "20px",
    borderRadius: "5px",
    marginBlockStart: "10vh",
    backgroundColor: "#FFFDFD",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "2px",
    margin: "10px",
    flex: 1,
    backgroundColor: "#FFFDFD",
  },
  imageSection: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recomendedStory: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  tumbnail: {
    width: "200px",
    height: "150px",
    objectFit: "cover",
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBlockStart: "10vh",
    padding: "20px",
    borderRadius: "5px",
    height: "39vh",
  },
}));
