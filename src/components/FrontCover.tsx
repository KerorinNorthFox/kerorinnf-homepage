const FrontCover = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="md:w-[50%]">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl">けろりん北狐のホームページ</h1>
          <p className="text-lg">何も書くことがねぇ</p>
        </div>
        <img
          src="https://count.getloli.com/get/@kerorinnf?theme=rule34"
          alt="access counter"
          className="mx-auto mt-24"
        />
        <p className="text-center text-xs text-gray-500">ケモ耳可愛い</p>
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
