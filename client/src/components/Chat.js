import React, { useState, useEffect } from 'react';
import { loader } from "../images";
import Sidebar from './Sidebar';

function Chat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const defaultOptions = [
    { 
      title: 'Brainstorm names', 
      description: 'For my fantasy football team with my frog theme' 
    },
    { 
      title: 'Suggest some codenames', 
      description: 'For a project introducing flexible work arrangements' 
    },
    { 
      title: 'Write an SQL query', 
      description: 'That adds a \'status\' column to an \'order\' table' 
    },
    { 
      title: 'Explain why popcorn pops', 
      description: 'To a kid who loves watching it in the microwave' 
    }
  ];

  const sendMessage = async (message) => {
    const userMessage = message || userInput;
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: userMessage }),
      });

      const data = await response.json();
      const botMessage = data.response;

      setChatHistory(prevHistory => [
        ...prevHistory,
        { type: 'user', text: userMessage },
        { type: 'bot', text: botMessage },
      ]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Scroll to the bottom whenever chatHistory updates
    const chatContainer = document.getElementById('chat-history');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col grow items-center p-20 w-full border border-solid bg-indigo-950 border-white border-opacity-10 rounded-[30px] max-md:px-5 max-md:mt-9 max-md:max-w-full">
      <div className="flex flex-col mt-40 max-w-full leading-[150%] text-neutral-200 w-[512px] max-md:mt-10">
        <div className="flex gap-4 text-5xl font-semibold tracking-wider max-md:flex-wrap max-md:text-4xl">
          <div className="flex-auto my-auto max-md:text-4xl">Welcome to </div>
          <div className="flex gap-1.5 max-md:text-4xl">
            <div className="shrink-0 border-solid bg-indigo-950 border-[3px] border-indigo-950 h-[72px] w-[3px]" />
            <div className="flex-auto my-auto max-md:text-4xl">LEO AI</div>
          </div>
        </div>
        <div className="mx-12 mt-4 text-base max-md:mx-2.5">
          The power of AI at your service - Tame the knowledge !
        </div>
      </div>
      <div className="pb-10 mt-16 max-w-full w-[694px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-neutral-200 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/492ff50bc1a3acfb621a7b9b9d72d373d161c07ba723418cf9949ef20a3e38e7?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="self-center w-5 aspect-square"
              />
              <div className="flex flex-col mt-2">
                <div className="self-center text-base font-medium leading-6">
                  Clear and precise
                </div>
                <div className="mt-1 text-sm font-light leading-5 text-center">
                  Pariatur sint laborum cillum aute consectetur irure.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-neutral-200 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f921a9a6b698cd2e4c65aad79003904e9c40755f930e6841ffa3bfde2038b065?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="self-center w-5 aspect-square"
              />
              <div className="flex flex-col mt-2">
                <div className="mx-4 text-base font-medium leading-6 max-md:mx-2.5">
                  Personalized answers
                </div>
                <div className="mt-1 text-sm font-light leading-5 text-center">
                  Pariatur sint laborum cillum aute consectetur irure.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-neutral-200 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b52c047eecbf37b78ca0adf6cad82753f64cc79f2552ce9b79714076f18bb2?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="self-center w-5 aspect-square"
              />
              <div className="flex flex-col mt-2">
                <div className="self-center text-base font-medium leading-6">
                  Increased efficiency
                </div>
                <div className="mt-1 text-sm font-light leading-5 text-center">
                  Pariatur sint laborum cillum aute consectetur irure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center self-stretch mt-44 mr-3 ml-3 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 justify-between py-2 pr-2 pl-8 w-full border-2 border-pink-800 border-solid shadow-sm bg-indigo-950 rounded-[30px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-2 my-auto text-xl leading-8 text-slate-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0930fdf40c06b4ec67bc48b5290903ffb789a30ae341c17472fe04684c4f3514?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <div>How can I help you?</div>
          </div>
          <div className="flex gap-5 justify-between py-1">
            <div className="flex gap-3 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89ef7df5367586ee3503202dd6d01f82884e8c95a5b0b3a555d117f5e4d02aeb?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 aspect-[0.85] w-[17px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/476e64e29ae05e159e0a33918396811bc1d96137418e558455284054a44ba4aa?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 w-5 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/125328e81dce2c2943a87d6dff3066600bb1440879f7b754b0172ed4099653a1?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
            <div className="flex justify-center items-center px-4 py-3 rounded-lg border border-white border-solid shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90ad4931965a5626d8dcf832137819e2711fb1638221d8b7ac7d8cac81e1ce7c?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="aspect-square w-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Chat;
