import { Routes, Route } from "react-router-dom";

import { Home } from "./containers/Home";
import { ServicesFees } from "./containers/ServicesFees";
import { Gallery } from "./containers/Gallery";
import { FAQs } from "./containers/FAQs";
import { Reviews } from "./containers/Reviews";
import { Contact } from "./containers/Contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/services" element={<ServicesFees />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
