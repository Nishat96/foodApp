import { StyleSheet } from "react-native";

export default StyleSheet.create({
  splashLogo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  notificationBar: {
    flexDirection: "row",
    marginLeft: 20,
    padding: 20
  },

  titleBarOne: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    paddingLeft: 20,
    paddingTop: 20
  },

  titleBarTwo: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    paddingLeft: 20,
    paddingBottom: 20
  },

  inputArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#484646',
    height: 40,
    borderRadius: 30,
    margin: 10,
  },

  searchBar: {
    flex: 1,
    paddingLeft: 30,
  },

  navTitle: {
    marginLeft: 20,
    padding: 10
  },

  seeMoreBtn: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 10,
    color: "orange",
    fontWeight: "bold"
  },

  foodNameArea: {
    marginLeft: 40,
  },

  foodName: {
    fontSize: 18,
    fontWeight: "bold"
  }

});
