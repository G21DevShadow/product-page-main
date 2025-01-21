import { useState } from "react";

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  function activate() {
    setState(!state);
  }

  return {
    activate,
    state,
  };
}
