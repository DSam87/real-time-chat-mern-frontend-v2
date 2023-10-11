import React, { useState } from "react";
import { useAddPostMutation } from "../../app/api/apiSlice";
import { motion } from "framer-motion";

function ChatBoxForm({ key }) {
 

  const [addPost, { isSuccess, isFetching }] = useAddPostMutation();
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  function onChangeHandler(e) {
    setText(e.target.value);
  }

  function onUsernameHndler(e){
    setUsername(e.target.value)
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
    <motion.form
      initial={{opacity: 0, translateY: 100}}
      animate={{ opacity: 100, translateY: 0}}
      transition={{
        duration: 2,
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2, 
      }}
      
      key={key}
      className="fixed md:static flex flex-row  bottom-0 left-0 md:flex items-center justify-center post-item-container w-[100%] h-[10%] max-h-[10%]  flex-grow-0  "
      onSubmit={submitHandler}
    >
        <div className="text-input w-[25%] md:w-[10%] h-[100%]  flex justify-center items-center text-center content-center">
          <input
          autoComplete="off"
          onChange={onUsernameHndler}
          value={username}
          type="text"
          className="w-[95%] h-[60%] rounded-2xl pl-1 md:pl-6 text-2xl"
          name="username"
          placeholder="name"
        ></input>
      </div>
      <div className="text-input w-[65%] h-[100%]  flex justify-center items-center">
        <input
          autoComplete="off"
          onChange={onChangeHandler}
          value={text}
          type="text"
          className="w-[95%] h-[60%] rounded-2xl pl-1 md:pl-6 text-2xl"
          name="post"
          placeholder="Start posting here!"
        ></input>
      </div>
      <div className="flex justify-center items-center text-input w-[20%] h-[100%] ">
        <button className="text-white rounded-md uppercase text-xl bg-indigo-950 h-[60%] w-[85%] tracking-widest  hover:bg-indigo-900 hover:rounded-2xl transition-all duration-300">
          Post
        </button>
      </div>
    </motion.form>
  );
}

export default ChatBoxForm;
