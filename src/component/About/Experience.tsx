import React from "react";
import Section from "../Section/Section";
import { experience } from "./Experience";
import Table from "./Table";

const Experience = () => {
  return (
    <Section heading="Experience">
      <Table list={experience}/>
    </Section>
  )
}

export default Experience