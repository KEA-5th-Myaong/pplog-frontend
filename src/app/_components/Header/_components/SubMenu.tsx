import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from '../../Modal';

export default function SubMenu({ isBlog, userName }: { isBlog?: boolean; userName?: string }) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleModalConfirm = () => {
    setShowModal(false);
  };

  const handleNavigation = (path: string) => {
    if (userName === undefined) {
      setShowModal(true);
    } else {
      router.push(path);
    }
  };
  return (
    <>
      <div className="absolute bg-white-0 dark:bg-gray-4 border-2 text-gray-0 w-[108px] left-1/2 transform -translate-x-1/2 rounded-md mt-2">
        {isBlog ? (
          <>
            <div className="w-[88px] h-8 mx-auto m-2">
              <button
                type="button"
                onClick={() => handleNavigation(`/blog/${userName}`)}
                className="flex-center hover:bg-primary-1 hover:text-white-0 font-normal text-gray-0 text-xs rounded-md w-full h-full"
              >
                내 블로그
              </button>
            </div>
            <div className="w-[88px] h-8 mx-auto m-2">
              <button
                type="button"
                onClick={() => handleNavigation(`/blog/${userName}/write`)}
                className="flex-center hover:bg-primary-1 hover:text-white-0 font-normal text-gray-0 text-xs rounded-md w-full h-full"
              >
                글쓰기
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-[88px] h-8 mx-auto m-2">
              <button
                type="button"
                onClick={() => handleNavigation(`/interview/${userName}/select`)}
                className="flex-center hover:bg-primary-1 hover:text-white-0 font-normal text-gray-0 text-xs rounded-md w-full h-full"
              >
                모의 면접
              </button>
            </div>
            <div className="w-[88px] h-8 mx-auto m-2">
              <button
                type="button"
                onClick={() => handleNavigation(`/personal-statement/${userName}/list`)}
                className="flex-center hover:bg-primary-1 hover:text-white-0 font-normal text-gray-0 text-xs rounded-md w-full h-full"
              >
                자소서 첨삭
              </button>
            </div>
            <div className="w-[88px] h-8 mx-auto m-2">
              <button
                type="button"
                onClick={() => handleNavigation('/portfolio')}
                className="flex-center hover:bg-primary-1 hover:text-white-0 font-normal text-gray-0 text-xs rounded-md w-full h-full"
              >
                내 포트폴리오
              </button>
            </div>
          </>
        )}
      </div>
      {showModal && (
        <Modal
          topText="로그인이 필요한 서비스입니다."
          btnText="확인"
          onBtnClick={handleModalConfirm}
          onOverlayClick={handleModalConfirm}
        />
      )}
    </>
  );
}
