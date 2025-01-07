"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BsClipboard2Heart } from "react-icons/bs";
import { components } from "@/utils/data";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert("Code copied to clipboard!");
};

const ButtonComponent = () => {
  return (
    <div>
      <h2 className="text-3xl mb-4">{components.button.name}</h2>
      <p>{components.button.description}</p>

      {components.button.variants.map((variant, index) => (
        <div key={index} className="mb-10">
          <div className="my-4">
            <h3 className="text-2xl font-semibold">{variant.name}</h3>
            <p>{variant.description}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold">Code</h4>
            <div className="flex flex-row justify-between items-center gap-4">
              <div className="w-1/2 relative rounded-lg overflow-auto bg-gray-700 p-4">
                <div className="relative rounded-lg">
                  <SyntaxHighlighter
                    language="jsx"
                    style={duotoneDark}
                    className="rounded-lg h-[400px]"
                  >
                    {variant.code}
                  </SyntaxHighlighter>
                  <BsClipboard2Heart
                    onClick={() => copyToClipboard(variant.code)}
                    className="absolute top-3 right-6 text-white text-2xl cursor-pointer"
                  />
                </div>
              </div>
              <div className="w-1/2 rounded-lg overflow-auto bg-gray-700 p-4">
                <div className="relative rounded-lg">
                  <SyntaxHighlighter
                    language="jsx"
                    style={duotoneDark}
                    className="rounded-lg h-[400px]"
                  >
                    {variant.code2}
                  </SyntaxHighlighter>
                  <BsClipboard2Heart
                    onClick={() => copyToClipboard(variant.code2)}
                    className="absolute top-3 right-6 text-white text-2xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-black">Preview</h4>
            <div className="w-1/2 py-10 px-6 flex flex-col items-center justify-center rounded-lg h-auto bg-gray-700 mt-2">
              {variant.render}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonComponent;
