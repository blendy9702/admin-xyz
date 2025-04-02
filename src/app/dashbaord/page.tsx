const page = () => {
  const statusData = [1, 2, 3, 4];
  const chartData = [1, 2, 3, 4];

  return (
    <div className="m-auto">
      <div className="bg-gray-100/15 m-auto px-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex justify-center items-center gap-5 mt-5">
            {statusData.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 w-[230px] h-[70px] rounded-[12px]"
              >
                <div className="flex justify-center items-center p-1">
                  <div className="text-[#1e1e1e] text-[16px] font-bold">
                    {index === 0 && (
                      <div>
                        <div>대시보드 1</div>
                        <div>기타 정보</div>
                      </div>
                    )}
                    {index === 1 && <div>대시보드 2</div>}
                    {index === 2 && <div>대시보드 3</div>}
                    {index === 3 && <div>대시보드 4</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-white/70 w-[480px] h-[160px] rounded-[12px]"></div>
            <div className="bg-white/70 w-[480px] h-[160px] rounded-[12px]"></div>
          </div>
          <div className="flex justify-center items-center gap-5">
            {chartData.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 w-[230px] h-[230px] rounded-[12px]"
              >
                {/* item 사용해서 내용 렌더링 */}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-5 mb-5">
            <div className="bg-white/70 w-[480px] h-[230px] rounded-[12px]"></div>
            <div className="bg-white/70 w-[480px] h-[230px] rounded-[12px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
