import React, { useState } from "react";
import { tiles } from "./tree-tiles";

const App = () => {
  const [tileProgress, setTileProgress] = useState(0);
  const [tileSteps] = useState(2);

  const treesGrown = Math.floor(tileProgress / tiles.length);
  return (
    <div
      className="App"
      style={{
        background: `#ffccaa`,
        minHeight: `100vh`,
        padding: `3vh 5vw 1rem`,
        textAlign: `center`
      }}
    >
      <textarea
        style={{
          display: `block`,
          width: `100%`,
          maxWidth: `80vw`,
          border: `solid 3px #ddbb99`,
          height: `55vh`,
          fontFamily: `sans-serif, serif`,
          fontSize: `1.5rem`,
          padding: `1rem`,
          margin: `0 auto`
        }}
        onChange={(event) => {
          const text = event.target.value;
          const wordCount = (text.match(/\s+/g)?.length || 0) / tileSteps;
          if (wordCount !== tileProgress) {
            setTileProgress(wordCount);
          }
        }}
      />

      <img
        src={tiles[Math.floor(tileProgress % tiles.length)]}
        alt="a little tree that grows as you type"
        style={{
          height: `20vh`
        }}
      />

      <p style={{ marginBottom: 0, fontSize: `1.2rem` }}>
        {treesGrown
          ? `You have grown ${treesGrown} tree${
            treesGrown > 1 ? `s` : ``
          }, and another on the way 🌳 Keep up the good work!`
          : `Feed this tree by writing 💚`}
      </p>

      {/* This would be a loading bar, but I don't think I
            got the Maths right and I don't think it needs it
      <section
      title="Tree growth"
      style={{
        height: `1rem`,
        width: `${2 * tileSteps}rem`,
        display: `flex`,
        margin: `0 auto`,
        border: `solid #66aa0090 1px`,
        // padding: `0.5rem`
      }}>
        {new Array(tileProgress % tileSteps).fill(0).map(() =>
          <span style={{
            height: `100%`,
            width: `2rem`,
            backgroundColor: `#66aa0090`
          }}></span>
        )}
      </section>
      */}

      <section
        title="Your forest of trees"
        style={{
          width: `100%`,
          justifyContent: `center`,
          display: `flex`,
          flexWrap: `wrap`
        }}
      >
        {new Array(treesGrown).fill(
          <img
            src={tiles[tiles.length - 1]}
            alt="a fully grown tree covered in pink blossoms"
            style={{
              height: `10vh`
            }}
          />
        )}
      </section>

    </div>
  );
};

export default App;
