import React, { useState } from "react";
import { useAddPostMutation } from "../../features/post/postSlice";

function ChatBoxForm({ userId }) {
  const [addPost, { isLoading, isFetching, isSuccess, isError, error }] =
    useAddPostMutation();

  const [text, setText] = useState("");

  function onChangeHandler(e) {
    setText(e.target.value);
  }

  async function submitHandler(e) {
    if (!isFetching) {
      e.preventDefault();
      await addPost({ postedBy: userId, text: text });
      setText("");
    }
  }

  return (
    <div className="flex items-center j post-item-container w-[100%] h-[10%] max-h-[10%]  flex-grow-0  ">
      <div className="text-input w-[80%] h-[100%]  flex justify-center items-center">
        <input
          onChange={onChangeHandler}
          value={text}
          type="text"
          className="w-[95%] h-[60%] rounded-2xl pl-6 text-2xl"
          name="post"
          placeholder="Start talking here!"
        ></input>
      </div>
      <div className="flex justify-center items-center text-input w-[20%] h-[100%] ">
        <button
          onClick={submitHandler}
          className="text-white rounded-md uppercase text-xl bg-indigo-950 h-[60%] w-[85%] tracking-widest  hover:bg-indigo-900 hover:rounded-2xl transition-all duration-300"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default ChatBoxForm;
