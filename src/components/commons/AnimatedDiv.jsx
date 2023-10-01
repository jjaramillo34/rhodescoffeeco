const AnimatedDiv = ({ children, className = "" }) => (
  <div
    className={`element-anim-1 scroll-animate ${className}`}
    data-animate="active"
  >
    {children}
  </div>
);
