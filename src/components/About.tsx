const About = () => {
  return (
    <div className="flex h-[560px] w-full justify-center">
      <div className="my-12 w-[95%] rounded-xl border border-black bg-white py-16 shadow-lg lg:w-[60%]">
        <div className="font-bold text-light-text">
          <h1 className="text-center text-4xl">Profile</h1>
          <div className="mt-12 grid grid-cols-4 gap-y-4 px-12 text-2xl">
            <p className="col-span-1 text-right">Name：</p>
            <p className="col-span-3 ml-8">KerorinNF</p>
            <p className="col-span-1 text-right">Age：</p>
            <p className="col-span-3 ml-8">19yo</p>
            <p className="col-span-1 text-right">Hobbies：</p>
            <p className="col-span-3 ml-8">Programming, Osu!</p>
            <p className="col-span-1 text-right">Skills：</p>
            <p className="col-span-3 ml-8">Python, Nim, C#, Flutter, Nextjs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
