import { useEffect, useState } from "react";

const Hooks = (fetchLink = "") => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch(fetchLink)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, [fetchLink]);
  return api;
};

export default Hooks;
