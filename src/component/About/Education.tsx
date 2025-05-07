import Section from "../Section/Section";
import { education } from "./Education";
import Table from "./Table";

const Education = () => {
  return (
    <Section heading="Education">
      <Table list={education}/>
    </Section>
  );
};

export default Education;
