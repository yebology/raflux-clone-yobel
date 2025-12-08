const Space = () => {
  return (
    <div className="hidden lg:flex bg-primary w-full">
      <div className="bg-primary w-full">
        <div className="grid grid-cols-6 h-[16vh] w-full">
          <div className="col-span-2 border-r border-t border-gray-700" />
          <div className="col-span-3 border-r border-t border-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Space;
