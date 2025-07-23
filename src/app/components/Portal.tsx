import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';

export default function Portal({children} : {children: React.ReactNode}) {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setRendered(true);
  }, [])

  if(!rendered) return null;

  return createPortal(children,document.getElementById('portal') as Element
  )
}
