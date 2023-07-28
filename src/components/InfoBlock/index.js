import React, { useEffect } from "react";

import anime from "animejs/lib/anime.es.js";

export default function InfoBlock({ className }) {
  useEffect(() => {
    const timeline = anime.timeline({
      easing: "easeInOutSine",
      duration: 500,
      loop: true,
      direction: "alternate",
    });
    timeline.add({
      targets: ".signature",
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: anime.stagger(500),
      endDelay: 250,
    });
  }, []);

  return (
    <div className={`${className} z-10 flex justify-end items-baseline w-full`}>
      <h2 id="signature" className="font-handwritten mr-4 mt-2">
        Creative developer
      </h2>
    </div>
  );
}
