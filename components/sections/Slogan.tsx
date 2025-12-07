const Slogan = () => {
  return (
    <div className="h-54 lg:h-62 border-t border-b border-gray-700 bg-primary justify-center items-center flex">
      <div className="flex flex-col">
        <div className="flex lg:flex-row-reverse items-center justify-between">
          <div>
            <h1 className="text-sm text-gray-400 lg:text-end">
              // EVM COMPATIBLE (BASE)
            </h1>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mt-4">
            FAIR.{" "}
          </h1>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mt-4">
          TRANSPARENT. FUN{" "}
        </h1>
      </div>
    </div>
  );
};

export default Slogan;
