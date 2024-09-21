import { RouterProvider } from "react-router-dom";
import CartPage from './pages/cart/Cart'
import router from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Route path="/cart"element={ <CartPage/>  }/>
      <Toaster />
    </div>
  );
}

export default App;
