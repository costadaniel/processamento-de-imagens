import React, { useState, useEffect } from "react";
import TopBar from "./components/TopBar";

const App = () => {
  const [image, setImage] = useState(null);

  const handleGetInfo = () => {
    let file = document.getElementById("file-upload").files[0];
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    if (file) {
      let url = URL.createObjectURL(file);
      let img = new Image();

      img.src = url;
      img.onload = () => {
        canvas.height = img.height;
        canvas.width = img.width;

        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
      };

      setImage(ctx.getImageData(0, 0, img.width, img.height));
    }
    console.log(image.width);
  };

  useEffect(() => {}, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <TopBar />
      <h1>Editor de Imagens</h1>
      <input
        type="file"
        id="file-upload"
        name="file-upload"
        accept="image/png, image/jpeg"
      />
      <button type="button" onClick={() => {}}>
        Get Info!
      </button>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default App;
