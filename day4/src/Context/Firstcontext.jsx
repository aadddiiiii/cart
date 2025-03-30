import { createContext } from "react";

const Firstcontext = createContext({
    firstName: "",
    lastName: "",
    otherData: "",
    combineData: () => {},
});
export default Firstcontext;