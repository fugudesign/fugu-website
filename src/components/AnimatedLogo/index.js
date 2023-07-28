import React, { useMemo, useRef, useState } from "react";

import { Link } from "gatsby";
import anime from "animejs/lib/anime.es.js";

const ANIM_DURATION = 500;

export default function AnimatedLogo({ className = "text-black" }) {
  const animation = useRef();

  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [animOpened, setAnimOpened] = useState(false);

  const linkOpacity = useMemo(
    () =>
      !isAnimatingIn && !isAnimatingOut && animOpened
        ? "opacity-1"
        : "opacity-0",
    [isAnimatingIn, isAnimatingOut, animOpened]
  );

  const animeIn = () =>
    anime({
      targets: "h1 span",
      translateX: () => anime.random(-250, 250),
      translateY: () => anime.random(-200, 200),
      translateZ: (el) => {
        const value = anime.random(-2000, 500);
        el.dataset.z = value;
        return value;
      },
      rotate: () => anime.random(-250, 250),
      filter: (el) => `blur(${Math.abs(el.dataset.z / 200)}px)`,
      easing: "easeOutCirc",
      duration: ANIM_DURATION,
    });

  const animeOut = () =>
    anime({
      targets: "h1 span",
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      rotate: 0,
      filter: () => `blur(0px)`,
      easing: "easeInQuad",
      duration: ANIM_DURATION,
    });

  const finishAnim = () => {
    setIsAnimatingOut(true);
    animation.current = animeOut();
    animation.current.finished.then(() => {
      setIsAnimatingOut(false);
      setAnimOpened(false);
    });
  };

  const handleMouseEnter = () => {
    setIsAnimatingIn(true);
    setAnimOpened(true);

    animation.current = animeIn();

    animation.current.finished.then(() => {
      setIsAnimatingIn(false);
    });
  };

  const handleMouseLeave = () => {
    if (isAnimatingIn) {
      animation.current.finished.then(() => {
        finishAnim();
      });
    } else {
      finishAnim();
    }
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-10 -mt-16"
    >
      {animOpened && (
        <Link
          className={`${linkOpacity} transition-opacity ease-in-out duration-500 absolute text-black font-extrabold p-4 z-20 bottom-0 right-10 text-xl -mb-2 mr-5`}
          to="mailto:info@fugu.fr"
          target="_blank"
        >
          info@fugu.fr
        </Link>
      )}
      <h1
        className={`${className} leading-[0.75em] transform-style-3d inline-flex cursor-default`}
      >
        <span className="pointer-events-none">f</span>
        <span className="pointer-events-none">u</span>
        <span className="pointer-events-none">g</span>
        <span className="pointer-events-none">u</span>
        <span className="pointer-events-none">.</span>
      </h1>
    </button>
  );
}
