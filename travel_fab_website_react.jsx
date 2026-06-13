import React, { useMemo, useState } from "react";
import { Plane, MapPin, Sparkles, MessageCircle, Send, MoonStar, Sun, Camera, Mountain, Waves, Trees, UtensilsCrossed } from "lucide-react";

const destinations = [
  {
    name: "Santorini Glow",
    vibe: "Blue domes, cliffside sunsets, and slow-breath evenings.",
    icon: Sun,
    badge: "Romance",
  },
  {
    name: "Kyoto Bloom",
    vibe: "Temples, lantern lanes, and cherry-blossom hush.",
    icon: Trees,
    badge: "Culture",
  },
  {
    name: "Bali Drift",
    vibe: "Rice terraces, surf mornings, and spa-soft skies.",
    icon: Waves,
    badge: "Relax",
  },
  {
    name: "Swiss Peaks",
    vibe: "Alpine trains, mountain air, and postcard-perfect trails.",
    icon: Mountain,
    badge: "Adventure",
  },
  {
    name: "Marrakech Maze",
    vibe: "Color-splashed markets, spices, and lantern-lit alleys.",
    icon: Sparkles,
    badge: "Exotic",
  },
  {
    name: "Goa Rhythm",
    vibe: "Beach sunsets, seafood feasts, and easy-going nights.",
    icon: Camera,
    badge: "Fun",
  },
];

const starterPrompts = [
  "Suggest a budget trip",
  "Best honeymoon place?",
  "Tell me a 3-day plan",
  "Help me choose a beach",
];

function BotAvatar() {
  return (
    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
      <MessageCircle className="h-5 w-5 text-white" />
    </div>
  );
}

function replyTo(message) {
  const m = message.toLowerCase();
  if (/(budget|cheap|low cost|afford)/.test(m)) {
    return "Budget magic: try Goa, Nepal, Vietnam, or Bali in shoulder season. I can also map a wallet-friendly day-by-day plan.";
  }
  if (/(honeymoon|romantic|couple)/.test(m)) {
    return "For a dreamy escape, Santorini, Maldives, or Udaipur work beautifully. Soft sunsets, quiet stays, and slow dinners do the trick.";
  }
  if (/(beach|sea|ocean)/.test(m)) {
    return "Beach radar says Bali, Goa, Phuket, and the Andaman Islands. Want calm waters or party energy?";
  }
  if (/(mountain|trek|snow|hike)/.test(m)) {
    return "Mountain mode: Switzerland, Himachal, Uttarakhand, or New Zealand. I can suggest easy, medium, or spicy treks 🏔️";
  }
  if (/(food|eat|cuisine|restaurant)/.test(m)) {
    return "Food-first travel? Try Thailand, Istanbul, Japan, or Sicily. Each place is basically a delicious passport stamp.";
  }
  if (/(plan|itinerary|3-day|5-day|weekend)/.test(m)) {
    return "I can build an itinerary with mornings, sightseeing, food stops, and chill time. Tell me the place and number of days.";
  }
  return "I am your travel sidekick. Ask me about places, budgets, beaches, mountains, food, or itineraries, and I will chart a route.";
}

export default function TravelWebsite() {
  const [dark, setDark] = useState(true);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Welcome! I can help you pick destinations, plan trips, or spark your next getaway." },
  ]);
  const [input, setInput] = useState("");

  const themeClass = dark
    ? "bg-slate-950 text-white"
    : "bg-gradient-to-b from-sky-50 to-white text-slate-900";

  const cardClass = dark
    ? "bg-white/8 border-white/10 text-white"
    : "bg-white border-slate-200 text-slate-900";

  const subtleClass = dark ? "text-slate-300" : "text-slate-600";

  const stats = useMemo(
    () => [
      { label: "Dream routes", value: "120+" },
      { label: "Hidden gems", value: "40" },
      { label: "Happy travelers", value: "9.8k" },
    ],
    []
  );

  const sendMessage = (text = input) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: clean },
      { role: "bot", text: replyTo(clean) },
    ]);
    setInput("");
  };

  return (
    <div className={`${themeClass} min-h-screen transition-colors duration-500`}>
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-52 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Plane className="h-6 w-6 text-white rotate-[-20deg]" />
          </div>
          <div>
            <p className="font-semibold tracking-wide">WanderWave</p>
            <p className={`text-sm ${subtleClass}`}>Travel beautifully, travel wildly</p>
          </div>
        </div>

        <button
          onClick={() => setDark((v) => !v)}
          className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border transition ${cardClass}`}
        >
          {dark ? <Sun className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          {dark ? "Light" : "Dark"}
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-16">
        <section className="grid lg:grid-cols-2 gap-10 items-center pt-8 pb-16">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border ${cardClass}`}>
              <MapPin className="h-4 w-4 text-cyan-400" />
              Curated journeys for your next escape
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
              Craft your next <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">fabulous</span> adventure.
            </h1>
            <p className={`mt-5 text-lg max-w-xl ${subtleClass}`}>
              A cinematic travel website with dreamy destinations, fast inspiration, and a chatbot that answers like a tiny passport wizard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25">
                Start Exploring
              </button>
              <button className={`rounded-2xl px-6 py-3 border font-semibold ${cardClass}`}>
                Build My Trip
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              {stats.map((s) => (
                <div key={s.label} className={`rounded-2xl p-4 border ${cardClass}`}>
                  <p className="text-2xl font-extrabold">{s.value}</p>
                  <p className={`text-sm mt-1 ${subtleClass}`}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-fuchsia-500/20 blur-2xl" />
            <div className={`relative rounded-[2rem] border p-5 shadow-2xl ${cardClass}`}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-[1.5rem] overflow-hidden relative min-h-72 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Featured Escape</p>
                    <h2 className="text-3xl font-black mt-1">Alpine sunrise retreat</h2>
                  </div>
                </div>
                <div className="rounded-[1.5rem] p-4 border bg-white/5">
                  <Waves className="h-6 w-6 text-cyan-400" />
                  <p className="mt-3 font-semibold">Ocean breeze</p>
                  <p className={`text-sm mt-1 ${subtleClass}`}>Slow mornings and salt-air serenity.</p>
                </div>
                <div className="rounded-[1.5rem] p-4 border bg-white/5">
                  <UtensilsCrossed className="h-6 w-6 text-amber-400" />
                  <p className="mt-3 font-semibold">Food trails</p>
                  <p className={`text-sm mt-1 ${subtleClass}`}>Street bites, local feasts, and dessert detours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Destinations</p>
              <h2 className="text-3xl font-bold mt-2">Pick your mood, pack your wonder</h2>
            </div>
            <p className={`max-w-md text-sm ${subtleClass}`}>From candlelit coastlines to mountain sparks, every card is a doorway.</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {destinations.map((d) => {
              const Icon = d.icon;
              return (
                <article key={d.name} className={`rounded-[1.75rem] border p-5 transition hover:-translate-y-1 hover:shadow-2xl ${cardClass}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10">{d.badge}</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">{d.name}</h3>
                  <p className={`mt-2 ${subtleClass}`}>{d.vibe}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
          <div className={`rounded-[2rem] border p-6 ${cardClass}`}>
            <div className="flex items-center gap-3 mb-5">
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              <h2 className="text-2xl font-bold">Travel Chatbot</h2>
            </div>

            <div className="space-y-4 max-h-[420px] overflow-auto pr-1">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "bot" && <BotAvatar />}
                  <div
                    className={`max-w-[80%] rounded-3xl px-4 py-3 leading-relaxed border ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent"
                        : dark
                        ? "bg-white/6 border-white/10"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {starterPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  className={`text-sm rounded-full px-4 py-2 border transition ${cardClass}`}
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about places, budgets, itineraries..."
                className={`flex-1 rounded-2xl px-4 py-3 outline-none border ${dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
              />
              <button
                onClick={() => sendMessage()}
                className="rounded-2xl px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold inline-flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
          </div>

          <div className={`rounded-[2rem] border p-6 ${cardClass}`}>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Signature</p>
            <h3 className="text-3xl font-black mt-2">Made for unforgettable journeys</h3>
            <p className={`mt-4 ${subtleClass}`}>
              This site is designed to feel like a glossy travel magazine that learned to speak back.
            </p>

            <div className="mt-6 rounded-[1.5rem] p-5 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Final credit</p>
              <p className="text-2xl font-extrabold mt-2">Vikram Chouhan</p>
              <p className={`mt-2 text-sm ${subtleClass}`}>A proud name at the end of the voyage.</p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-amber-300" />
                </div>
                <div>
                  <p className="font-semibold">Smooth motion</p>
                  <p className={`text-sm ${subtleClass}`}>Floating cards and soft gradients.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Plane className="h-5 w-5 text-sky-300" />
                </div>
                <div>
                  <p className="font-semibold">Travel-first layout</p>
                  <p className={`text-sm ${subtleClass}`}>Hero, destinations, and chatbot in one flow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
