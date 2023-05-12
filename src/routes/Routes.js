import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Feature from "../pages/Features/Feature";
import NftRights from "../pages/NFT/NftRights";
import MarketPlace from "../pages/MarketPlace/MarketPlace";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Auction from "../pages/Auction/Auction";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/features",
        element: <Feature />,
      },
      {
        path: "/pre-nft",
        element: <NftRights />,
      },
      {
        path: "/marketplace",
        element: <MarketPlace />,
      },
      {
        path: "/auction",
        element: <Auction />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
