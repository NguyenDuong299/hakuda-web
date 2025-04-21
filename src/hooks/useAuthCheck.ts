// hooks/useAuthCheck.ts
import { useEffect } from "react";
import { useAuth } from "../store/authStore";
import axios from "axios";

export const useAuthCheck = () => {
  const { setUser, setLoading } = useAuth();

  useEffect(() => {
    const checkLogin = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/my-profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, [setUser, setLoading]);
};
