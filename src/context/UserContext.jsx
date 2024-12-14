import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(() => {
    const storedProfile = localStorage.getItem("userProfile");
    return storedProfile ? JSON.parse(storedProfile) : { name: "", bio: "" };
  });

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
    }
  }, [userProfile]);

  const resetUserProfile = () => {
    setUserProfile({
      name: "",
      bio: "",
    });
  };

  return (
    <UserContext.Provider value={{ userProfile, setUserProfile, resetUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};
