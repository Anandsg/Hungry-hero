import { createContext } from "react";

const UserContext = createContext({
  user: {
    // name: "Developed with ❤️ and a lot of ☕️",
    name : "Please login",
    email: "Dummy@gmail.com",
  },
});

export default UserContext;
