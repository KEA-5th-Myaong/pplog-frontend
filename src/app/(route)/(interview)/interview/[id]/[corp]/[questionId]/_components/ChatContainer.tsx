'use client';

import { useState } from 'react';
import MessageForm from './MessageForm';
import Icons from '../../../../../../../_components/ui/Icon';
import { ArrowIcon } from '../../../../../../../_components/ui/iconPath';
import useContainerHeight from '../../../../../_utils/useContainerHeight';

export default function ChatContainer() {
  const [messages, setMessages] = useState([
    { text: '위볼린이 속한 산업에서의 최신 기술 트렌드를 어떻게 따라가고 계신가요?', isAI: true },
  ]);

  // 채팅 컨테이너에 대한 참조를 생성(DOM 요소에 접근)
  const chatContainerRef = useContainerHeight();

  const addMessage = (message: string, isAI: boolean) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isAI }]);
  };

  const handleSubmit = (newMessage: string) => {
    if (newMessage.trim()) {
      addMessage(newMessage, false);
      console.log('메시지 전송됨');
    }
  };

  const handleTailQuestion = () => {
    console.log('꼬리 질문 생성');
  };

  const handleNewQuestion = () => {
    console.log('새 질문 생성');
  };
  return (
    <div
      ref={chatContainerRef}
      className="flex flex-col w-full relative min-w-[375px] max-w-[735px] border-t border-gray-2"
    >
      <div className="flex-1 overflow-y-auto pt-5 pb-4 hide-scrollbar">
        <div className="flex flex-col gap-7">
          {messages.map((msg) => (
            <div className={`flex flex-col ${msg.isAI ? 'items-start' : 'items-end'}`}>
              {msg.isAI && <p className="font-semibold pb-3">면접관</p>}
              <div className={`chat-msg-text ${msg.isAI ? 'bg-gray-4' : 'bg-white-2 text-white'}`}>{msg.text}</div>
              {!msg.isAI && (
                <div className="flex items-center gap-4 pt-4">
                  <button type="button" className="chat-msg-btn" onClick={handleTailQuestion}>
                    꼬리 질문 받기 <Icons className="rotate-180 border rounded-full" name={ArrowIcon} />
                  </button>
                  <button type="button" className="chat-msg-btn" onClick={handleNewQuestion}>
                    새 질문 생성 <Icons className="rotate-180 border rounded-full" name={ArrowIcon} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 메시지 입력 폼 */}
      <MessageForm onSubmit={handleSubmit} />
    </div>
  );
}
