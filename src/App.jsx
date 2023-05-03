import { } from "react";
import { Routes,Route } from "react-router-dom";

import "./App.css";
import Chat from "./components/pages/Chat/Chat";
import ChatUserInfo from "./components/pages/ChatUserInfo/ChatUserInfo";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import InfoPage from './components/pages/Info/SelectedUser'

function App() {
  console.log('App component rendered')
  return (
    <div className="w-[100%] max-h-screen grid grid-cols-app-grid">
      <Dashboard />
      <Routes>
        <Route
          path="/:id"
          element={
            <>
              <Chat />
              <ChatUserInfo />
            </>
          }
        />
        <Route path="/info/:id" element={<InfoPage /> } />
      </Routes>
    </div>
  );
}

export default App;
