import React, { useMemo } from "react";
import ChatBoxForm from "./ChatBoxForm";
import ChatBubble from "./ChatBubble";
import { useGetPostsQuery } from "../../app/api/apiSlice";
import SpinComponent from "../../utilComponents/SpinComponent";
import classNames from "classnames";

function ChatBox({ userId, username }) {
  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isFetching,
    isError,
  } = useGetPostsQuery(undefined, {
    pollingInterval: 4000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  const reversedPosts = useMemo(() => {
    const reversedPosts = posts.slice().reverse();
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
      <div className="flex  flex-col-reverse post-item-container w-[100%] h-[90%] max-h-[90%]  overflow-auto flex-grow-0 pl-5 pt-5">
        {content}
      </div>
      <ChatBoxForm userId={userId} username={username} />
    </div>
  );
}

export default ChatBox;
