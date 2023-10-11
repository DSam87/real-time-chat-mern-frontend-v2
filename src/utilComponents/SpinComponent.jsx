function SpinComponent() {
  return (
    <div role="status" className="flex justify-center items-center absolute !z-50 !opacity-100">
      <img className=" inline-block ml-10 w-[150px]" src="./loading.gif" alt="loading img"></img>
    </div>
  );
}

export default SpinComponent;
