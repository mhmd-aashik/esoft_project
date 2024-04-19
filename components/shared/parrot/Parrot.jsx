"use client";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from "react";

const Parrot = () => {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  return (
    <div className="App">
      <button onClick={handleMinimize}> Minimize the Chat </button>

      <TawkMessengerReact
        propertyId={process.env.PROPERTYID}
        widgetId={process.env.WIDGETID}
        ref={tawkMessengerRef}
      />
    </div>
  );
};

export default Parrot;
