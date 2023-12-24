//AuthContext

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//veri alanini olusturduk..
export const AuthContext = createContext();

//veri saglayicinini olusturduk.///
export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [input, setInput] = useState();

  const login = (info) => {
    setUser(info);
    navigate("/dashboard");
  };

  return (
    <AuthContext.Provider value={{ user, login, input, setInput, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
