import React from 'react';

/**
 * Renders text as individually-animated words that rise into place
 * once the wrapper gets the `.in` class from the scroll-reveal observer.
 *
 * <SplitText as="h1" text="Vishanthra Fernando" step={70} />
 */
const SplitText = ({
  text,
  as = 'span',
  step = 55,
  delay = 0,
  className = '',
  highlightFrom,
}) => {
  const Tag = as;
  const words = String(text).split(' ');

  return (
    <Tag className={`reveal-line ${className}`} data-reveal="words">
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          <span
            className={`reveal-word${
              highlightFrom !== undefined && i >= highlightFrom ? ' gold' : ''
            }`}
            style={{ '--w-delay': `${delay + i * step}ms` }}
          >
            {word}
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default SplitText;
