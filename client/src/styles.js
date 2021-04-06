import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    letterSpacing: "3px",
    fontWeight: "bold",
    fontFamily: "Brush Script MT",
    color: "#660000",
  },
  image: {
    marginLeft: "15px",
  },
}));
