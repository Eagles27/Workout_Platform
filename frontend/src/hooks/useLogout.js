import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem("user");

    // Dispatch the logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
