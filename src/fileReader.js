import React from "react";
import Button from "@material-ui/core/Button";

const FileReader = () => {
  const msg = "hi";

  async function runCommand() {
    const res = await window.ipcRenderer.send("runCommand", msg);
    // console.log(res);
    return res;
  }

  window.ipcRenderer.on("asynchronous-reply", (event, arg) => {
    console.log(arg); // prints "pong"
  });
  return (
    <Button
      style={{ width: "100%", maxWidth: "800px" }}
      variant="contained"
      onClick={runCommand}
      color={"primary"}
    >
      Read CSV
    </Button>
  );
};

export default FileReader;
