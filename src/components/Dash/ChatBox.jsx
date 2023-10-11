import React, { useMemo, useEffect,useRef } from "react";
import ChatBoxForm from "./ChatBoxForm";
import ChatBubble from "./ChatBubble";
import { useGetPostsQuery } from "../../app/api/apiSlice";
import SpinComponent from "../../utilComponents/SpinComponent";
import classNames from "classnames";
import { motion } from "framer-motion";
import Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function ChatBox({ username }) {
  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isFetching,
    isError,
  } = useGetPostsQuery(undefined, {
    pollingInterval: 40000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  const refBottom = useRef()

  useEffect(()=>{
    if(posts.length){
      refBottom.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }

  }, [posts])


  let content;

  const reversedPosts = useMemo(() => {
    const reversedPosts = posts.slice();
    return reversedPosts;
  }, [posts]);

  if (isLoading) {
    content = <SpinComponent />;
  } else if (isSuccess) {
    const containerClassname = classNames({ "": isFetching });

    const renderedPosts = reversedPosts.map((post, index) => (
      <ChatBubble
        post={post}
        key={index}
        containerClassname={containerClassname}
      />
    ));

    content = renderedPosts;
  } else if (isError) {
    content = <div>{isError.toString()}</div>;
  }

  return (
    <div className="w-[75%] h-[100%]  flex-auto  flex-grow-0">
      <motion.div 
        initial={{ opacity: 0, translateY: -100  }}
        animate={{ translateY: 0 , opacity:100}} 
        transition={{ delay: .8, duration: 1 }}
        className="flex  flex-col post-item-container w-[100%] h-[90%] max-h-[90%]  overflow-auto flex-grow-0 pl-5 pt-5"
      >
        {content}
        <div name="bottomInsideContainer" ref={refBottom}></div>
      </motion.div>
      <ChatBoxForm username={username} />
    </div>
  );
}

export default ChatBox;
