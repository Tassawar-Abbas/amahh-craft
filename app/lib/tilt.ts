import type { MouseEvent } from "react";

/**
 * Apply a 3D perspective tilt toward the mouse cursor.
 * Call this in an element's onMouseMove handler.
 */
export function applyTilt(
  e: MouseEvent<HTMLElement>,
  intensity = 8,
  lift = 14
) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;

  const rX = ((y - cy) / cy) * -intensity;
  const rY = ((x - cx) / cx) * intensity;

  // Fast follow during move
  el.style.transition =
    "transform 0.08s ease, box-shadow 0.08s ease";
  el.style.transform = `perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(${lift}px)`;

  // Glare position for CSS ::after
  el.style.setProperty("--glare-x", `${(x / rect.width) * 100}%`);
  el.style.setProperty("--glare-y", `${(y / rect.height) * 100}%`);
  el.style.setProperty("--glare-opacity", "1");
}

/**
 * Smoothly reset the tilt when the mouse leaves.
 */
export function resetTilt(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.transition =
    "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease";
  el.style.transform =
    "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  el.style.setProperty("--glare-opacity", "0");
}
