"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Long-press auto-repeat for stepper buttons: a normal click fires once
 * (via onClick); holding the button repeats every 120 ms after 400 ms.
 */
export function useRepeatPress(action: () => void) {
  const actionRef = useRef(action);
  const timeout = useRef<number | null>(null);
  const interval = useRef<number | null>(null);

  useEffect(() => {
    actionRef.current = action;
  }, [action]);

  const stop = useCallback(() => {
    if (timeout.current) window.clearTimeout(timeout.current);
    if (interval.current) window.clearInterval(interval.current);
    timeout.current = null;
    interval.current = null;
  }, []);

  const start = useCallback(() => {
    stop();
    timeout.current = window.setTimeout(() => {
      interval.current = window.setInterval(() => actionRef.current(), 120);
    }, 400);
  }, [stop]);

  useEffect(() => stop, [stop]);

  return {
    onClick: () => actionRef.current(),
    onPointerDown: start,
    onPointerUp: stop,
    onPointerLeave: stop,
    onPointerCancel: stop,
  };
}
