import { themes } from "../db";
import React from "react";
import "./ThemeList.css";
import Theme from "./Theme";

// console.log(themes);

// const theme = themes[2

// ];

// const ThemeList = () => {
//   return (
//     <div>
//       <p className="color-name">{theme.name}</p>
//       {theme.colors.map((theme) => (
//         // <p key={theme.name}>{theme.name}</p>
//         <ColorCard key={theme.name} hex={theme.value} role={theme.role} />
//       ))}
//     </div>
//   );
// };

// export default ThemeList;

const ThemeList = () => {
  return (
    <div>
      {/* <p className="color-name">{themes.name}</p> */}
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} />
      ))}
    </div>
  );
};
export default ThemeList;
