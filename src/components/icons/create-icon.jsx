// Reusable icon component factory.
// Each icon accepts: size (number|string, default 24) and className (for color via currentColor).

export function createIcon(viewBox, renderFn) {
  return function Icon({ size = 24, className = '', ...rest }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...rest}
      >
        {renderFn()}
      </svg>
    );
  };
}
