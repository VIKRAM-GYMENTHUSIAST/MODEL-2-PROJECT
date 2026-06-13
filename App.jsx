import React, { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm AIBot. Ask me about travel or AI." }
  ]);
  const [input, setInput] = useState("");

  const reply = (msg) => {
    const m = msg.toLowerCase();
    if (m.includes("ai")) return "AI helps computers learn and make decisions!";
    if (m.includes("travel")) return "Try Bali, Switzerland, Kyoto, or Goa!";
    return "Welcome to AI Adventure World. Explore, Play, and Learn AI!";
  };

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages,
      { role: "user", text: input },
      { role: "bot", text: reply(input) }
    ]);
    setInput("");
  };

  return (
    <div style={{fontFamily:"Arial",padding:"20px"}}>
      <h1>🌍 AI Adventure World</h1>
      <h2>Explore, Play, and Learn AI!</h2>

      <section>
        <h3>🤖 AIBot</h3>
        {messages.map((m,i)=><p key={i}><b>{m.role}:</b> {m.text}</p>)}
        <input value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={send}>Send</button>
      </section>

      <h3>🗺️ Worlds</h3>
      <ul>
        <li>Robot City</li>
        <li>Puzzle Forest</li>
        <li>Creativity Island</li>
        <li>Space Data Station</li>
        <li>Ocean of Neural Networks</li>
      </ul>

      <h3>🏆 Levels</h3>
      <p>AI Explorer → Robot Apprentice → Data Detective → AI Master</p>

      <footer>
        <hr />
        <p>Special Thanks: Vikram Chouhan</p>
      </footer>
    </div>
  );
}
