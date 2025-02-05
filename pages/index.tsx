import { css } from "@mui/material";
import type { NextPage } from "next";
import ThemeUpdater from "../src/components/ThemeUpdater";

const Home: NextPage = () => {
  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <ThemeUpdater />
    </main>
  );
};

export default Home;
