import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const frases = [
  "Seja Bem-vindo Player",
  "Confira Nossas Histórias Sobre Os Melhores Jogos De FPS",
  "Entre Em Contato Com O Suporte E Deixe Seu Feedback :)"
];

// Mapeia o que será estilizado em cada frase
const estilosFrases = {
  "Seja Bem-vindo Player": ["Player"],
  "Confira Nossas Histórias Sobre Os Melhores Jogos De FPS": ["Jogos", "FPS"],
  "Entre Em Contato Com O Suporte E Deixe Seu Feedback :)": ["Feedback"]
};

export default function FrasesLoop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % frases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const fraseAtual = frases[index];
  const palavras = fraseAtual.split(" ");
  const destaque = estilosFrases[fraseAtual] || [];

  return (
    <div className={styles.TextMain}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <span>
            {palavras.map((palavra, i) => {
              const precisaDestacar = destaque.includes(palavra.replace(/[^a-zA-ZÀ-ÿ0-9]/g, ""));
              return (
                <span
                  key={i}
                  className={precisaDestacar ? styles.palavraDestacada : undefined}
                >
                  {palavra}
                  {i < palavras.length - 1 ? " " : ""}
                </span>
              );
            })}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
