import * as React from "react";
import { Checkbox } from "baseui/checkbox";
import { Label1, Paragraph1 } from "baseui/typography";

export default () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <>
      <Label1>Do you have Coronavirus?</Label1>
      <Paragraph1>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
          Yes
        </Checkbox>
        <Checkbox checked={!checked} onChange={() => setChecked(!checked)}>
          No
        </Checkbox>
      </Paragraph1>
    </>
  );
};
