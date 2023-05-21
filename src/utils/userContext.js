import { createContext } from "react";

const UserContext = createContext({
  user: {
    // name: "Developed with ❤️ and a lot of ☕️",
    name : "Browse, Order, and Enjoy!",
    email: "Dummy@gmail.com",
  },
});

export default UserContext;
