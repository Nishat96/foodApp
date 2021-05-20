import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileTopBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
  },

  profileSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 10,
    marginLeft: 15,
    width: 350,
    height: 180,
    borderRadius: 10,
    borderWidth: 0,
    overflow: "hidden",
    shadowRadius: 10,
    shadowOpacity: 1,
  },

  firstProfileBar: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },

  profileBar: {
    marginLeft: 15,
    marginBottom: 15,
  },

  profileBtn: {
    backgroundColor: "#fffefe",
    width: 350,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    fontWeight: "bold",
    color: "#000000",
  },

});
