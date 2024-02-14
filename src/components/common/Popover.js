import React, { useState, useEffect, useRef } from 'react';

const Bun = ({ popoverContent, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    if (isVisible) {
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isVisible]);

  const handleTogglePopover = (event) => {
    event.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div onClick={handleTogglePopover}>{children}</div>

      {isVisible && (
        <div
          ref={popoverRef}
          style={{
            position: 'absolute',
            top: '40px',
            left: '50%',
            transform: 'translateX(-75%)',
            backgroundColor: '#fff',
            padding: '8px 12px',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            zIndex: '50',
          }}
        >
          {popoverContent}
        </div>
      )}
    </div>
  );
};

const Popover = ({ popoverContent, children }) => (
    <Bun popoverContent={popoverContent}>
      {children}
    </Bun>
  );

export default Popover;