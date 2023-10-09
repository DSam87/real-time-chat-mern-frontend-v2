import React from "react";
import ChatBoxForm from "./ChatBoxForm";

function ChatBox() {
  return (
    <div className="w-[75%] h-[100%]  flex-auto  flex-grow-0">
      <div className="flex  flex-col-reverse post-item-container w-[100%] h-[90%] max-h-[90%]  overflow-auto flex-grow-0 pl-5 pt-5">
        <div className="post-item flex flex-col justify  bg-indigo-900 text-white text-xl  flex-initial w-fit py-4 px-6 rounded-md rounded-br-3xl mb-3">
          <p className="inline-flex  text-black  bg-white py-3 pl-6 pr-24 rounded-lg text-2xl">
            Test of the post Test of the post Test of the post Test of the post
            Test of the post Test of the post
          </p>

          <div className="flex flex-row flex-shrink justify-between ">
            <p className="inline-block mx-3">The username</p>
            <p className="inline-block mx-3">1/1/23</p>
          </div>
        </div>

        <div className="post-item flex flex-col justify  bg-indigo-900 text-white text-xl flex-initial w-fit py-4 px-6 rounded-md rounded-br-3xl mb-3">
          <p className="inline-flex  text-black  bg-white py-3 pl-6 pr-24 rounded-lg text-2xl">
            Test of the post Tes
          </p>

          <div className="flex flex-row flex-shrink justify-between ">
            <p className="inline-block mx-3">The username</p>
            <p className="inline-block mx-3">1/1/23</p>
          </div>
        </div>

        <div className="post-item flex flex-col justify  bg-indigo-900 text-white text-xl flex-initial w-fit py-4 px-6 rounded-md rounded-br-3xl mb-3">
          <p className="inline-flex  text-black  bg-white py-3 pl-6 pr-24 rounded-lg text-2xl">
            Test of the post Test of the post Test of the post Test of the post
          </p>

          <div className="flex flex-row flex-shrink justify-between ">
            <p className="inline-block mx-3">The username</p>
            <p className="inline-block mx-3">1/1/23</p>
          </div>
        </div>

        <div className="post-item flex flex-col justify  bg-indigo-900 text-white text-xl flex-initial w-fit py-4 px-6 rounded-md rounded-br-3xl mb-3">
          <p className="inline-flex  text-black  bg-white py-3 pl-6 pr-24 rounded-lg text-2xl">
            Test of the post Test of the
          </p>

          <div className="flex flex-row flex-shrink justify-between ">
            <p className="inline-block mx-3">The username</p>
            <p className="inline-block mx-3">1/1/23</p>
          </div>
        </div>

        <div className="post-item flex flex-col justify  bg-indigo-900 text-white text-xl flex-initial w-fit py-4 px-6 rounded-md rounded-br-3xl mb-3">
          <p className="inline-flex  text-black  bg-white py-3 pl-6 pr-24 rounded-lg text-2xl">
            Test of the post Test of the post Test of the post Test of the post
            Test of the post Test of the post
          </p>

          <div className="flex flex-row flex-shrink justify-between ">
            <p className="inline-block mx-3">The username</p>
            <p className="inline-block mx-3">1/1/23</p>
          </div>
        </div>

        <div className="post-item flex flex-col justify  bg-indigo-900 text-white text-xl flex-initial w-fit p-6 rounded-lg mb-3">
          <p className="inline-flex  text-black  bg-white py-3 pl-6 pr-24 rounded-lg text-2xl">
            Test of the post
          </p>

          <div className="flex flex-row flex-shrink ">
            <p className="inline-block">The username</p>
            <p className="inline-block">1/1/23</p>
          </div>
        </div>

        <div className="post-item flex flex-col justify  bg-indigo-900 text-white text-xl flex-initial w-fit p-6 rounded-lg mb-3">
          <p className="inline-flex  text-black  bg-white py-3 pl-6 pr-24 rounded-lg text-2xl">
            Test of the post
          </p>

          <div className="flex flex-row flex-shrink ">
            <p className="inline-block">The username</p>
            <p className="inline-block">1/1/23</p>
          </div>
        </div>
      </div>

      <ChatBoxForm />
    </div>
  );
}

export default ChatBox;
