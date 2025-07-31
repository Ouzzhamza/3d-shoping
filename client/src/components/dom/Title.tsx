import React from "react";

function Title({
  title,
  titleStyle = "",
  HeaderStyle = "",
}: {
  title: string;
  titleStyle?: string;
  HeaderStyle?: string;
}) {
  return (
    <div className={titleStyle}>
      <h3 className={`border-b-3 border-primary pb-2 ${HeaderStyle}`}>
        {title}
      </h3>
    </div>
  );
}

export default Title;
