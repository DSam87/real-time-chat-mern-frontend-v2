import React from "react";
import { motion } from "framer-motion";
function ChatBubble({ post, containerClassname, lastElement }) {
  const dateString = post.time.toString();
  const fields = dateString.split("T");
  const theDate = fields[0];
  return (
    <motion.div
      initial={{opacity: 0, scale: 0}}
      animate={{ opacity: 100, scale:1}} 
      transition={{ duration: .2 }}
      className={`${containerClassname} post-item flex flex-col justify bg-indigo-900 text-white text-xl  flex-initial w-fit py-4 px-6 rounded-md rounded-br-3xl mb-3`}
    >
      <p className="inline-flex  text-black  bg-white py-3 pl-0 md:pl-5 pr-24 rounded-lg text-2xl">
        {post.text}
      </p>

      <div className="flex flex-row flex-shrink justify-between ">
        <p className="inline-block mx-3 first-letter:uppercase">
          {post.postedBy}
        </p>
        <p className="inline-block mx-3">{theDate}</p>
      </div>
    </motion.div>
  );
}

export default ChatBubble;
