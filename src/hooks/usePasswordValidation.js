import { useState } from "react";

function usePasswordValidation() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = (value) => {
    if (value.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
    }
    setPassword(value);
  };

  return [password, error, validate];
}

export default usePasswordValidation;
