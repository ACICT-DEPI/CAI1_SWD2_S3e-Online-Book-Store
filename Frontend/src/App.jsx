import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { useCartStore } from "./store/cartStore";

function App() {
  const { user } = useAuthStore();
  const { getCartItems } = useCartStore();

  useEffect(() => {
    if (!user) return;
    getCartItems();
  }, [getCartItems, user]);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
