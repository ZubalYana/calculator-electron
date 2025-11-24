import React, { useState } from "react";
import "./main.css";
import { UpperMenu } from "./components/UpperMenu/UpperMenu";
import { ResultField } from "./components/ResultField/ResultField";
export function Main() {

  return (
    <>
      <div className="container">
        <UpperMenu />
        <ResultField />
      </div>
    </>
  );
}
