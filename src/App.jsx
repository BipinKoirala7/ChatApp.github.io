import {  } from "react";

import "./App.css";
import Chat from "./components/pages/Chat/Chat";
import ChatUserInfo from "./components/pages/ChatUserInfo/ChatUserInfo";
import Dashboard from "./components/pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="w-[100%] max-h-screen grid grid-cols-app-grid">
      <Dashboard />
      <Chat />
      <ChatUserInfo />
    </div>
  );
}

export default App;
