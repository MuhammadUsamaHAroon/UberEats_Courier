import { createContext, useEffect, useState, useContext } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Courier } from "../models";
import { Alert } from "react-native";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbCourier, setDbCourier] = useState(null);
  const sub = authUser?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
  }, []);

  const  getExistCourier = async() => {
    const fetchUser = await DataStore.query(Courier)
    const getSubId = fetchUser.filter((item)=>item.sub==sub)
    .then((couriers)=>console.log("getSubId-->", couriers))
    .catch((e)=>console.log(e.message))
  }
  useEffect(() => {
    getExistCourier();
  }, [sub]);

  console.log(dbCourier);

  return (
    <AuthContext.Provider value={{ authUser, dbCourier, sub, setDbCourier }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);