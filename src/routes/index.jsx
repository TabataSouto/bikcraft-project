import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/home";
import { Bicycles } from "../pages/bicycles";
import { Secure } from "../pages/secure";
import { Contact } from "../pages/contact";

export const RoutesApp = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/bicycles" element={<Bicycles />} />
      <Route path="/secure" element={<Secure />} />
      <Route path="/contact" element={<Contact />} />
    </Switch>
  );
};
