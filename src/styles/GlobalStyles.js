import { StyleSheet } from "react-native";

export default StyleSheet.create({
  foodImg: {
    width: 170,
    height: 170,
  },

  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 10
  },

  drinksImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  flexRow: {
    flexDirection: "row"
  },

  footerArea: {
    justifyContent: "space-evenly",
    paddingTop: 90
  },

  foodTitle: {
    fontWeight: "bold"
  },

  cartBtn: {
    backgroundColor: "#FA4A0C",
    width: 180,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    fontWeight: "bold",
    color: "#fff",
  },

  profileBtn: {
    backgroundColor: "#fffefe",
    width: 180,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    fontWeight: "bold",
    color: "#000000",
  }

})
