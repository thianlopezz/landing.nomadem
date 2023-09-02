"use client";

import React, { useState } from "react";
import LinkButton from "./LinkButton";

const minusIcon = "-";
const plusIcon = "+";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="my-2 sm:my-4 md:my-6 w-full mx-auto text-center pb-10"
      // onClick={toggleExpanded}
    >
      {/* <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1">
          {title}
        </h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div> */}
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-min" : "max-h-0"
        }`}
      >
        {children}
      </div>
      <LinkButton
        className="mx-auto cursor-pointer"
        text={`${!expanded ? "Ver más" : "Ver menos"}`}
        variant="secondary"
        onClick={toggleExpanded}
      />
      <br />
    </div>
  );
}
