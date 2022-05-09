import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Todo from "../tool/Todo"
import Auth from "../components/auth/auth"
export default function RoutesUtility() {
  return (
    <Router>
      <Routes >
        <Route path="/todo" element={<Todo />} /> :
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="/404" element={<div>incorrect path</div>} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>
  )
}