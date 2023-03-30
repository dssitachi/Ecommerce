function Loader() {
  return (
    <div className="h-screen w-full absolute flex justify-center items-center">
      <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;