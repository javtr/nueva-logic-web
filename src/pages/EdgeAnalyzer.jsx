import React, { useState, useContext, useEffect, useMemo } from "react";
import LanguageContext from "../context/langContext";
import { Helmet } from "react-helmet-async";
import { textEn, textEs } from "../assets/text/edgeAnalyzer";

const STORAGE_KEY = "edgeAnalyzer_state";

const newId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

function classifyEdge(edge) {
  if (edge <= -1) return { label: "strongEdge", color: "#ff4d4d" }; // rojo fuerte
  if (edge === 0) return { label: "noAdvantage", color: "#ff8a00" }; // naranja
  if (edge <= 2) return { label: "weakEdge", color: "#ffc233" }; // amarillo
  if (edge <= 4) return { label: "slightEdge", color: "#9bd93b" }; // verde claro
  return { label: "realEdge", color: "#32d27c" }; // verde acento
}

export default function EdgeAnalyzer() {
  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState(textEn);

  const [thesis, setThesis] = useState("");
  const [pros, setPros] = useState([]);
  const [cons, setCons] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // i18n: cambiar textos al cambiar idioma
  useEffect(() => {
    setText(lang === "es" ? textEs : textEn);
  }, [lang]);

  // Hidratar desde localStorage una sola vez al montar
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed.thesis === "string") setThesis(parsed.thesis);
        if (Array.isArray(parsed.pros)) setPros(parsed.pros);
        if (Array.isArray(parsed.cons)) setCons(parsed.cons);
      }
    } catch (err) {
      // Si algo está corrupto, ignorar y empezar limpio
      console.warn("edgeAnalyzer: no se pudo leer localStorage", err);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persistir cada vez que cambian thesis/pros/cons (solo después de hidratar)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ thesis, pros, cons })
      );
    } catch (err) {
      console.warn("edgeAnalyzer: no se pudo escribir localStorage", err);
    }
  }, [thesis, pros, cons, hydrated]);

  // Edge derivado
  const { edge, classification, classColor, activePros, activeCons } =
    useMemo(() => {
      const activePros = pros.filter((p) => p.active).length;
      const activeCons = cons.filter((c) => c.active).length;
      const edge = activePros - activeCons;
      const { label, color } = classifyEdge(edge);
      return {
        edge,
        classification: text.classifications[label],
        classColor: color,
        activePros,
        activeCons,
      };
    }, [pros, cons, text]);

  const addItem = (list, setList, value) => {
    const trimmed = (value || "").trim();
    if (!trimmed) return;
    setList([...list, { id: newId(), text: trimmed, active: true }]);
  };

  const toggleItem = (list, setList, id) => {
    setList(
      list.map((it) => (it.id === id ? { ...it, active: !it.active } : it))
    );
  };

  const resetAll = () => {
    if (
      typeof window !== "undefined" &&
      !window.confirm(
        lang === "es"
          ? "¿Borrar todo el análisis?"
          : "Clear the whole analysis?"
      )
    ) {
      return;
    }
    setThesis("");
    setPros([]);
    setCons([]);
  };

  return (
    <>
      <Helmet>
        <title>Edge Analyzer - Logic Indicators</title>
        <meta
          name="description"
          content={
            lang === "es"
              ? "Analiza tus trades: lista pros y contras y obtén una clasificación de tu edge en segundos."
              : "Analyze your trades: list pros and cons and get an edge classification in seconds."
          }
        />
      </Helmet>

      <div className="edge-analyzer">
        <div className="edge-analyzer__header">
          <h1>LOGIC INDICATORS</h1>
          <h2>EDGE ANALYZER</h2>
          <p className="edge-analyzer__subtitle">{text.subtitle}</p>
        </div>

        {/* TRADE THESIS */}
        <div className="edge-analyzer__thesis">
          <h3>{text.thesisTitle}</h3>
          <textarea
            value={thesis}
            onChange={(e) => setThesis(e.target.value)}
            placeholder={text.thesisPlaceholder}
          />
        </div>

        {/* PROS / CONS */}
        <div className="edge-analyzer__grid">
          <ListCard
            title={`🟢 ${text.prosLabel}`}
            titleClass="edge-analyzer__proTitle"
            kind="pro"
            items={pros}
            placeholder={text.proPlaceholder}
            onAdd={(v) => addItem(pros, setPros, v)}
            onToggle={(id) => toggleItem(pros, setPros, id)}
          />
          <ListCard
            title={`🔴 ${text.consLabel}`}
            titleClass="edge-analyzer__conTitle"
            kind="con"
            items={cons}
            placeholder={text.conPlaceholder}
            onAdd={(v) => addItem(cons, setCons, v)}
            onToggle={(id) => toggleItem(cons, setCons, id)}
          />
        </div>

        {/* RESULT */}
        <div className="edge-analyzer__result">
          <div
            className="edge-analyzer__bigScore"
            style={{ color: classColor }}
          >
            {(edge > 0 ? "+" : "") + edge}
          </div>
          <div
            className="edge-analyzer__classification"
            style={{ color: classColor }}
          >
            {classification}
          </div>

          <div className="edge-analyzer__stats">
            <Stat label={text.prosLabel} value={activePros} />
            <Stat label={text.consLabel} value={activeCons} />
            <Stat label={text.edgeLabel} value={edge} />
          </div>

          <button className="edge-analyzer__resetBtn" onClick={resetAll}>
            {text.resetBtn}
          </button>
        </div>
      </div>
    </>
  );
}

function ListCard({ title, titleClass, kind, items, placeholder, onAdd, onToggle }) {
  const [input, setInput] = useState("");

  return (
    <div className="edge-analyzer__card">
      <h3 className={titleClass}>{title}</h3>
      <input
        className="edge-analyzer__cardInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onAdd(input);
            setInput("");
          }
        }}
        placeholder={placeholder}
      />
      <div className="edge-analyzer__list">
        {items.map((item) => (
          <div
            key={item.id}
            className={`edge-analyzer__item edge-analyzer__item--${kind} ${
              item.active
                ? "edge-analyzer__item--active"
                : "edge-analyzer__item--inactive"
            }`}
            onClick={() => onToggle(item.id)}
          >
            <span className="edge-analyzer__itemIcon">
              {item.active ? "☑" : "☒"}
            </span>{" "}
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="edge-analyzer__stat">
      <div className="edge-analyzer__statLabel">{label}</div>
      <div className="edge-analyzer__statValue">{value}</div>
    </div>
  );
}