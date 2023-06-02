import React, { useState } from "react";
import Calendar from "moedim";

export default function Cal() {
  const [val, setValue] = useState(new Date());
  return <Calendar value={val} onChange={(d) => setValue(d)} />;
}
