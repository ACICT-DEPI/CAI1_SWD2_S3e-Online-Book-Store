import { Toaster } from "react-hot-toast";
import router from "./router/index";
import { RouterProvider } from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import { useCartStore } from "./store/cartStore";

function App() {
  const { isCheckingAuth, checkAuth, user } = useAuthStore();
  const { getCartItems } = useCartStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!user) return;

    getCartItems();
  }, [getCartItems, user]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
