import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { PageTitle } from "../components/atoms/PageTitle";

export const FAQs = () => {
  return (
    <Box m={8}>
      <PageTitle title="Frequently Asked Questions" />
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How much do you charge?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={100}>
            You can find an overview of our services and fees{" "}
            <a href="#/services" className="FAQlink">
              here
            </a>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I contact you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={100}>
            Complete the form{" "}
            <a href="#/contact" className="FAQlink">
              here
            </a>{" "}
            to get in touch.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can you only cater for outdoor events?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={100}>
            No, we can accommodate all types of venue.{" "}
            <a href="#/contact" className="FAQlink">
              Get in touch
            </a>{" "}
            to discuss your specific needs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What events do you have coming up?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={100}>
            Follow us on{" "}
            <a
              href="https://www.instagram.com/cynthias_jerkpit/"
              target="_blank"
              className="FAQlink"
            >
              our Instagram page
            </a>{" "}
            to get all of the latest updates and information on when we'll be
            coming to an event near you.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How else can I try your food?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={100}>
            We also offer a takeaway service via Deliveroo. Order{" "}
            <a
              href="https://deliveroo.co.uk/menu/birmingham/birmingham-city-centre/jerk-pit"
              target="_blank"
              className="FAQlink"
            >
              here
            </a>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
