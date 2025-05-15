import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

import Typography from "@mui/material/Typography";

const Experiences = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          March 2020 - April 2021
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>{/* icon perusahaan atau logo */}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="border-solid border-gray-400 border-2 p-2 rounded w-full">
            <Typography variant="h6" component="span">
              <h3 className="text-blue-900 md:font-semibold text-sm md:text-base">
                React.js Developer
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">PT. Lorem</p>
            </Typography>
            <Typography component="div">
              <ul className=" mt-2  pl-5 space-y-2">
                <li className="text-xs md:text-base">
                  Building web apps with React.js and related tech.
                </li>
                <li className="hidden md:flex">
                  Working with designers, PMs, and developers.
                </li>
                <li className="hidden lg:flex">
                  Making responsive, cross-browser friendly designs.
                </li>
                <li className="hidden xl:flex">
                  Reviewing code and giving feedback.
                </li>
              </ul>
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Jan 2021 - Feb 2022
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            {/* icon perusahaan atau logo */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="border-solid border-gray-400 border-2 p-2 rounded w-full">
            <Typography variant="h6" component="span">
              <h3 className="text-blue-900 md:font-semibold text-sm md:text-base">
                React Native Developer
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">PT. Lorem</p>
            </Typography>
            <Typography component="div">
              <ul className=" mt-2  pl-5 space-y-2">
                <li className="text-xs md:text-base text-left">
                  Building web apps with React.js and related tech.
                </li>
                <li className="hidden md:flex">
                  Working with designers, PMs, and developers.
                </li>
                <li className="hidden lg:flex">
                  Making responsive, cross-browser friendly designs.
                </li>
                <li className="hidden xl:flex">
                  Reviewing code and giving feedback.
                </li>
              </ul>
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Jan 2022 - Jan 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* icon perusahaan atau logo */}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="border-solid border-gray-400 border-2 p-2 rounded w-full">
            <Typography variant="h6" component="span">
              <h3 className="text-blue-900 md:font-semibold text-sm md:text-base">
                Web Developer
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">PT. Lorem</p>
            </Typography>
            <Typography component="div">
              <ul className=" mt-2  pl-5 space-y-2">
                <li className="text-xs md:text-base">
                  Building web apps with React.js and related tech.
                </li>
                <li className="hidden md:flex">
                  Working with designers, PMs, and developers.
                </li>
                <li className="hidden lg:flex">
                  Making responsive, cross-browser friendly designs.
                </li>
                <li className="hidden xl:flex">
                  Reviewing code and giving feedback.
                </li>
              </ul>
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Jan 2023 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            {/* icon perusahaan atau logo */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="border-solid border-gray-400 border-2 p-2 rounded w-full">
            <Typography variant="h6" component="span">
              <h3 className="text-blue-900 md:font-semibold text-sm md:text-base">
                Full stack Developer
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">PT. Lorem</p>
            </Typography>
            <Typography component="div">
              <ul className=" mt-2  pl-5 space-y-2">
                <li className="text-xs md:text-base text-left">
                  Building web apps with React.js and related tech.
                </li>
                <li className="hidden md:flex">
                  Working with designers, PMs, and developers.
                </li>
                <li className="hidden lg:flex">
                  Making responsive, cross-browser friendly designs.
                </li>
                <li className="hidden xl:flex">
                  Reviewing code and giving feedback.
                </li>
              </ul>
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Experiences;
