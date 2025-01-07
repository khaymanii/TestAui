// data.ts
"use client";

export const components = {
  button: {
    name: "Button",
    description:
      "A customizable button component with multiple variants to suit different use cases.",
    variants: [
      {
        name: "Primary Button",
        description:
          "A button with a solid background, used for primary actions.",
        code: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const SimpleButton = () => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#007BFF',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
                alignItems: 'center',
                width: 200,
            }}
        >
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Button 1</Text>
        </TouchableOpacity>
    );
};

export default SimpleButton;`,
        code2: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const SimpleButton = () => {
    return (
        <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <Text className="text-white text-base">Button 1</Text>
        </TouchableOpacity>
    );
};

export default SimpleButton;`,
        render: (
          <button className="bg-blue-500 py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <span className="text-white text-base">Button 1</span>
          </button>
        ),
      },
      {
        name: "Secondary Button",
        description:
          "A button with a subtle background, used for secondary actions.",
        code: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const SecondaryButton = () => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#28a745',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
                alignItems: 'center',
                width: 200,
            }}
        >
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Button 2</Text>
        </TouchableOpacity>
    );
};

export default SecondaryButton;`,
        code2: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const SecondaryButton = () => {
    return (
        <TouchableOpacity className="bg-green-500 py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <Text className="text-white text-base">Button 2</Text>
        </TouchableOpacity>
    );
};

export default SecondaryButton;`,
        render: (
          <button className="bg-green-500 py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <span className="text-white text-base">Button 2</span>
          </button>
        ),
      },
      {
        name: "Outline Button",
        description:
          "A button with an outlined border, suitable for less prominent actions.",
        code: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const OutlineButton = () => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#6c757d',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
                alignItems: 'center',
                width: 200,
            }}
        >
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Button 3</Text>
        </TouchableOpacity>
    );
};

export default OutlineButton;`,
        code2: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const OutlineButton = () => {
    return (
         <TouchableOpacity className="bg-gray-500 py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <Text className="text-white text-base">Button 3</Text>
        </TouchableOpacity>
    );
};

export default OutlineButton;`,
        render: (
          <button className="bg-gray-500 py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <span className="text-white text-base">Button 3</span>
          </button>
        ),
      },
    ],
  },
};
