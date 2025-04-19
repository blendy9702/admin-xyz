import { Metadata } from "next";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        404 - 페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4">요청하신 페이지가 존재하지 않습니다.</p>
    </div>
  );
};

// export const metadata: Metadata = {
//   title: "페이지를 찾을 수 없습니다",
// };

// export const dynamic = "force-dynamic";

export default NotFoundPage;
