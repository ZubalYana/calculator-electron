import React, { useState } from "react";
import "./main.css";
import { UpperMenu } from "./components/UpperMenu/UpperMenu";
import { ResultField } from "./components/ResultField/ResultField";
import { ActionButtons } from "./components/ActionButtons/ActionButtons";
export function Main() {

  return (
    <>
      <div className="container">
        <UpperMenu />
        <ResultField />
        <ActionButtons />
      </div>
    </>
  );
}
