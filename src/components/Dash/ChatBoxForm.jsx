import React, { useState } from "react";
// import { useAddPostMutation } from "../../features/post/postSlice";
import { useAddPostMutation } from "../../app/api/apiSlice";

function ChatBoxForm({ userId, username, key }) {
  console.log(key);
  // const [addPost, { isLoading, isFetching, isSuccess, isError, error }] =
  //   useAddPostMutation();

  const [addPost, { isSuccess, isFetching }] = useAddPostMutation();
  const [text, setText] = useState("");

  function onChangeHandler(e) {
    setText(e.target.value);
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      console.log("adding post front end");
      await addPost({ text: text, postedBy: username }).unwrap();
      setText("");
    } catch (err) {
      console.error("Failed to save the post: ", err);
    }
  }

  return (
    <form
      key={key}
      className="flex items-center j post-item-container w-[100%] h-[10%] max-h-[10%]  flex-grow-0  "
      onSubmit={submitHandler}
    >
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
        <button className="text-white rounded-md uppercase text-xl bg-indigo-950 h-[60%] w-[85%] tracking-widest  hover:bg-indigo-900 hover:rounded-2xl transition-all duration-300">
          Post
        </button>
      </div>
    </form>
  );
}

export default ChatBoxForm;
