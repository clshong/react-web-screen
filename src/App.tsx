import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import { Iconstyle } from './assets/icon/iconfont';
import { Globalstyle } from './style/global';

export default function App() {
  return (
    <>
      <Iconstyle></Iconstyle>
      <Globalstyle></Globalstyle>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </>

  );
}