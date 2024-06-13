const About = () => {
  return(
    <div className="flex h-[560px] w-full justify-center">
      <div className="w-[95%] lg:w-[60%] my-12 py-16 bg-white border border-black	rounded-xl shadow-lg">
        <div className="font-bold text-light-text">
          <h1 className="text-4xl text-center">Profile</h1>
          <div className="grid grid-cols-4 mt-12 text-2xl px-12 gap-y-4">
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
  )
}

export default About;