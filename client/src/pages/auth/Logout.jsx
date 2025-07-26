import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  }, [navigate]);

  return null;
}
