// "use client";
// import { useState, useEffect } from "react";
// import styles from "./EasterRabbit.module.css";

// const EasterRabbit = () => {
//   const [position, setPosition] = useState({ x: 20, y: 20 });
//   const [isRunning, setIsRunning] = useState(false);
//   const [showFact, setShowFact] = useState(false);
//   const [footprints, setFootprints] = useState<{ x: number; y: number }[]>([]);

//   const facts = [
//     "Пасхальный кролик стал символом Пасхи в XVI веке в Германии",
//     "Самый большой пасхальный кулич весил более 2 тонн!",
//     "Традиция красить яйца возникла до христианства",
//   ];

//   const handleClick = () => {
//     setShowFact(true);
//     setTimeout(() => setShowFact(false), 3000);
//   };

//   const moveRabbit = (e: MouseEvent) => {
//     if (!isRunning) return;

//     const newX = e.clientX > position.x ? position.x - 20 : position.x + 20;
//     const newY = e.clientY > position.y ? position.y - 20 : position.y + 20;

//     setPosition({
//       x: Math.max(10, Math.min(window.innerWidth - 100, newX)),
//       y: Math.max(10, Math.min(window.innerHeight - 100, newY)),
//     });

//     if (footprints.length % 3 === 0) {
//       setFootprints((prev) => [
//         ...prev.slice(-8),
//         {
//           x: position.x + 30,
//           y: position.y + 30,
//         },
//       ]);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", moveRabbit);
//     return () => window.removeEventListener("mousemove", moveRabbit);
//   }, [isRunning, position]);

//   return (
//     <>
//       {footprints.map((fp, i) => (
//         <div
//           key={i}
//           className={styles.footprint}
//           style={{
//             left: `${fp.x}px`,
//             top: `${fp.y}px`,
//             opacity: 0.8 - i * 0.1, // Постепенно исчезают
//           }}
//         />
//       ))}

//       <div
//         className={`${styles.rabbit} ${isRunning ? styles.running : ""}`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//         onMouseEnter={() => setIsRunning(true)}
//         onMouseLeave={() => setIsRunning(false)}
//         onClick={handleClick}
//       >
//         (\\__/)
//         <br />
//         (='.'=)
//         <br />
//         (")_(")
//       </div>

//       {showFact && (
//         <div
//           className={styles.factBubble}
//           style={{
//             left: `${position.x + 50}px`,
//             top: `${position.y - 40}px`,
//           }}
//         >
//           {facts[Math.floor(Math.random() * facts.length)]}
//         </div>
//       )}
//     </>
//   );
// };

// export default EasterRabbit;

"use client";
import { useState, useEffect } from "react";
import styles from "./EasterRabbit.module.css";

const EasterRabbit = () => {
  const [isHopping, setIsHopping] = useState(false);
  const [showFact, setShowFact] = useState(false);
  const [footprints, setFootprints] = useState<
    { x: number; y: number; size: number }[]
  >([]);

  const facts = [
    "В Германии пасхальный кролик оставляет яйца в гнёздах, которые дети делают из шляп",
    "Самый большой пасхальный кулич был испечён в 2011 году в Украине - весом 2 тонны!",
    "Крашеные яйца символизируют новую жизнь и воскресение",
  ];

  const handleClick = () => {
    setIsHopping(true);
    setShowFact(true);
    setTimeout(() => {
      setShowFact(false);
      setIsHopping(false);
    }, 3000);

    // Добавляем следы при клике
    setFootprints((prev) => [
      ...prev,
      { x: -10, y: -5, size: 6 },
      { x: -25, y: -10, size: 8 },
      { x: -40, y: -5, size: 6 },
    ]);
  };

  return (
    <div className={styles.container}>
      {/* Следы кролика */}
      {footprints.map((fp, i) => (
        <div
          key={i}
          className={styles.footprint}
          style={{
            right: `${fp.x}px`,
            bottom: `${fp.y}px`,
            width: `${fp.size}px`,
            height: `${fp.size}px`,
            opacity: 0.8 - i * 0.2,
          }}
        />
      ))}

      {/* Сам кролик */}
      <div
        className={`${styles.rabbit} ${isHopping ? styles.running : ""}`}
        onClick={handleClick}
      >
        (\\__/)
        <br />
        (='.'=)
        <br />
        (")_(")
      </div>

      {/* Пасхальный факт */}
      {showFact && (
        <div className={styles.factBubble}>
          {facts[Math.floor(Math.random() * facts.length)]}
        </div>
      )}
    </div>
  );
};

export default EasterRabbit;
