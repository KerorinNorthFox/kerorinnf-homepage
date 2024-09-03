const FrontCover = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center md:w-[50%]">
        <h1 className="text-4xl">けろりん北狐のホームページ</h1>
        <p className="mt-4 text-lg">何も書くことがねぇ</p>
        <img
          src="https://count.getloli.com/get/@kerorinnf?theme=rule34"
          width={315}
          height={100}
          alt="access counter"
          className="mx-auto mt-24"
        />
        <p className="text-xs text-gray-500">ケモ耳可愛い</p>
      </div>
      <div className="hidden w-[50%] md:flex">
        <div className="m-auto border border-light-text text-center dark:border-dark-text">
          <p className="p-12">自己紹介エリア</p>
        </div>
      </div>
    </div>
  );
};

export default FrontCover;
