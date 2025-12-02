import { useState, useEffect, useCallback, useRef } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const COUNSELOR_INSTRUCTIONS = `
## Role (역할)
## Role (역할)
당신은 통찰력 있는 'CBT(인지행동치료) 전문 심리상담사'입니다. 당신의 가장 큰 강점은 내담자의 **'전체적인 대화 맥락'을 꿰뚫어 보는 능력**입니다. 당신은 방금 들은 말에만 반응하는 앵무새가 아니라, 내담자가 대화 초반에 했던 이야기와 현재의 이야기를 종합하여 숨겨진 패턴을 찾아내는 파트너입니다.

## Core Competency: Contextual Understanding (핵심 역량: 맥락 이해)
**★ 매우 중요:**
1. **단기 기억 편향 금지:** 사용자의 바로 직전 발언(Last turn)에만 집중하지 마십시오. 대화 전체의 흐름(History)을 항상 스캔하십시오.
2. **연결 고리 만들기:** 사용자가 지금 호소하는 감정이 앞서 언급했던 특정 사건이나 인물, 혹은 이전의 발언과 어떻게 연결되는지 파악하여 언급하십시오.
   - 예: "아까 말씀하신 어머니와의 갈등이, 지금 직장에서 느끼는 소외감과도 비슷한 맥락으로 느껴지시나요?"
3. **패턴 포착:** 대화 중 반복되는 내담자의 '자동적 사고'나 '핵심 신념'이 있다면 이를 종합하여 제시하십시오.

## CBT Process (상담 프로세스)
1. **감정의 명명 및 수용:** 내담자의 감정을 읽어주되, 전체 맥락 속에서 파악합니다.
2. **사고-감정-행동 연결:** 사건 자체가 아닌 해석(생각)이 감정을 만듦을 인지시킵니다.
3. **소크라테스식 질문:** 내담자가 스스로 모순을 찾거나 시야를 넓히도록 질문합니다.
4. **대안적 행동 모색:** 현실적이고 작은 해결책을 함께 논의합니다.

## Guidelines (세부 지침)
- **종합적 청취:** 내담자가 "힘들다"고 말하면, 단순히 "힘드시군요"라고 하지 말고, **"아까 말씀하신 [A 사건] 때문에 여전히 힘드신 건가요, 아니면 또 다른 이유가 겹쳐진 걸까요?"**라고 물어 이전 정보를 활용하십시오.
- **모순 확인:** 내담자의 현재 말이 과거 말과 다르다면 부드럽게 확인하십시오. ("초반에는 괜찮다고 하셨는데, 말씀을 듣다 보니 사실은 많이 참아오신 것 같아요.")
- **일관성 유지:** 상담 내내 따뜻하고 분석적인 태도를 유지하며, 내담자가 안전함을 느끼게 하십시오.

## Interaction Example (대화 예시 - 맥락 활용)

**[Bad Case: 직전 말만 기억함]**
User: (초반에 시험 망쳤다고 함) ... "그래서 요즘 잠이 안 와."
Agent: "불면증이 있으시군요. 잠들기 전에 따뜻한 우유를 드셔보세요." (시험 얘기는 잊어버림)

**[Good Case: 맥락을 종합함]**
User: (초반에 시험 망쳤다고 함) ... "그래서 요즘 잠이 안 와."
Agent: "아까 말씀하신 시험 결과에 대한 걱정이 밤까지 이어져서 잠을 설치게 만드는 것 같아 안타깝네요. 자려고 누우면 주로 시험에 대한 어떤 생각이 꼬리를 무나요?"

**[Good Case: 패턴 인식]**
User: "친구들이 나를 싫어하는 것 같아."
Agent: "지난번 가족 이야기를 하실 때도 '내가 짐이 되는 것 같다'고 느끼셨잖아요. 혹시 친구들과의 관계에서도 '나는 환영받지 못한다'는 생각이 비슷하게 드시는 걸까요?"
`;

export const useRealtimeChat = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const dataChannel = useRef<RTCDataChannel | null>(null);
  const audioElement = useRef<HTMLAudioElement | null>(null);

  const connect = useCallback(async () => {
    if (sessionRef.current) {
        console.log("Session already exists, skipping connection.");
        return;
    }
    setIsConnecting(true);
    setError(null);
    console.log("Attempting to connect...");

    try {
      // 1. Fetch the client secret from our backend
      const response = await fetch('/api/generate-token', { method: 'POST' });
      if (!response.ok) {
        throw new Error(`Failed to fetch client token. Status: ${response.status}`);
      }
      const data = await response.json();
      const clientSecret = data.client_secret;

      if (!clientSecret) {
        throw new Error('Client secret is missing in the server response.');
      }
      console.log("Client secret received.");

      // 2. Create the agent and session
      const agent = new RealtimeAgent({
        name: "Assistant",
        instructions: "You are a helpful assistant.",
      });
      const newSession = new RealtimeSession(agent);
      sessionRef.current = newSession;
      setSession(newSession);
      console.log("RealtimeSession created.");
      
      // 3. Setup event listeners
      newSession.on('text', (text: string) => {
        console.log("Received text:", text);
        setMessages(prev => {
            // OpenAI might send text in chunks, so we append to the last message if it's from the assistant
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && lastMessage.role === 'assistant') {
                const updatedLastMessage = { ...lastMessage, content: lastMessage.content + text };
                return [...prev.slice(0, -1), updatedLastMessage];
            } else {
                return [...prev, { role: 'assistant', content: text }];
            }
        });
      });

      newSession.on('transcript', (transcript: { text: string, final: boolean }) => {
        console.log("Received transcript:", transcript.text, "final:", transcript.final);
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.role === 'user' && !transcript.final) {
            const updatedLastMessage = { ...lastMessage, content: transcript.text };
            return [...prev.slice(0, -1), updatedLastMessage];
          } else {
            return [...prev, { role: 'user', content: transcript.text }];
          }
        });
      });

      newSession.on('audio:assistant:start', () => {
        console.log("Assistant started speaking.");
        setIsSpeaking(true);
        // Start a new message bubble when assistant starts speaking
        setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      });

      newSession.on('audio:assistant:end', () => {
        console.log("Assistant finished speaking.");
        setIsSpeaking(false);
      });
      
      newSession.on('error', (err: any) => {
        console.error("Session error:", err);
        setError(err.message || 'An unknown error occurred.');
      });

      newSession.on('close', () => {
        console.log("Session closed.");
        setSession(null);
        sessionRef.current = null;
      });

      // 4. Connect to OpenAI
      await newSession.connect({ clientSecret });
      console.log("Session connected successfully.");

    } catch (err: any) {
      console.error("Connection Error:", err);
      setError(err.message);
      setIsConnected(false);
    }
  }, [handleServerEvent]);

  const disconnect = useCallback(() => {
    if (dataChannel.current) dataChannel.current.close();
    if (peerConnection.current) peerConnection.current.close();
    setIsConnected(false);
    setIsSpeaking(false);
    dataChannel.current = null;
    peerConnection.current = null;
  }, []);

  const sendText = useCallback((text: string) => {
    if (dataChannel.current && dataChannel.current.readyState === 'open') {
      const tempId = crypto.randomUUID();
      console.log(`📤 [User-Text]: ${text}`);
      setMessages(prev => [...prev, { id: tempId, role: 'user', content: text }]);

      const event = {
        type: "conversation.item.create",
        item: { type: "message", role: "user", content: [{ type: "input_text", text }] },
      };
      dataChannel.current.send(JSON.stringify(event));
      dataChannel.current.send(JSON.stringify({ type: "response.create" }));
    }
  }, []);

  /**
   * 상담 결과 리포트 생성 함수
   * - 현재까지의 대화 내용(messages)을 백엔드로 전송하여 분석 결과를 받아옵니다.
   */
  const generateReport = async () => {
    try {
      // 1. 유효한 메시지 필터링 (내용이 없거나 시스템 메시지는 제외)
      const validMessages = messages.filter(msg => 
        msg.content && 
        msg.content.trim() !== '' && 
        (msg.role === 'user' || msg.role === 'assistant')
      );

      if (validMessages.length === 0) {
        console.warn("⚠️ 분석할 대화 내용이 없습니다.");
        setError("대화 내용이 부족하여 리포트를 생성할 수 없습니다.");
        return null;
      }

      // 2. 백엔드 전송용 포맷 변환 ("Role: Content" 형태의 문자열 배열)
      const conversationHistory = validMessages.map(msg => 
        `${msg.role === 'user' ? '내담자' : '상담사'}: ${msg.content}`
      );

      console.log("📝 리포트 생성 요청 중...", conversationHistory);

      // 3. 백엔드 API 호출 (/api/generate-report)
      const response = await fetch('/api/generate-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversationHistory })
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`서버 응답 에러 (${response.status}): ${errText}`);
      }

      const data = await response.json();
      console.log("✅ 리포트 생성 완료:", data.report);
      
      return data.report; // 성공 시 리포트 텍스트 반환

    } catch (e: any) {
      console.error("❌ 리포트 생성 실패:", e);
      setError(e.message || "리포트 생성 중 알 수 없는 오류가 발생했습니다.");
      return null;
    }
  };

  useEffect(() => {
    return () => disconnect();
  }, [disconnect]);

  return {
    isConnected,
    isSpeaking,
    messages,
    error,
    connect,
    disconnect,
    sendText,
    generateReport,
  };
};