import { useState, useEffect } from 'react';

const Responsive = ({
  width,
  breakPoint = 640,
  renderMobile,
  renderDesktop,
}) => {
  const [ready, set] = useState(false);

  // NOTE: need this hack to delay render conditional during ssr
  useEffect(() => {
    set(true);
  }, []);

  return ready && width >= breakPoint ? renderDesktop() : renderMobile();
};

export default Responsive;
