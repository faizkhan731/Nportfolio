import { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://nportfolio-1.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage = { role: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl hover:scale-110 transition-all duration-300"
      >
        💬
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-500 ${
          open
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-90 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-black text-white p-3 font-semibold text-center">
          AI Assistant
        </div>

        {/* Messages */}
        <div className="h-72 overflow-y-auto p-3 space-y-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 px-3 py-2 rounded-xl text-sm animate-pulse">
                Typing...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex border-t p-2 gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="Ask something..."
          />
          <button
            onClick={sendMessage}
            className="bg-black text-white px-4 rounded-lg hover:scale-105 transition-all"
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
