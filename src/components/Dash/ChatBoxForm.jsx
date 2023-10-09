import React from "react";

function ChatBoxForm() {
  return (
    <div className="flex items-center j post-item-container w-[100%] h-[10%] max-h-[10%]  flex-grow-0  ">
      <div className="text-input w-[80%] h-[100%]  flex justify-center items-center">
        <input
          type="text"
          className="w-[95%] h-[60%] rounded-2xl pl-6 text-2xl"
          name="post"
          placeholder="Start talking here!"
        ></input>
      </div>
      <div className="flex justify-center items-center text-input w-[20%] h-[100%] ">
        <button className="text-white rounded-md uppercase text-xl bg-indigo-950 h-[60%] w-[85%] tracking-widest  hover:bg-indigo-900 hover:rounded-2xl transition-all duration-300">
          Post
        </button>
      </div>
    </div>
  );
}

export default ChatBoxForm;
