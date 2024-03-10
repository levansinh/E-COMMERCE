import { useState } from 'react';
import { GrLinkTop } from 'react-icons/gr';
export default function ScrollOnTop() {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <button className={visible ? 'block' : 'hidden'} onClick={scrollToTop}>
      <GrLinkTop />
    </button>
  );
}
