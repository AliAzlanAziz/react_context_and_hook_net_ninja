import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return(
    <div className="book-list" style={{ color:theme.syntax, background:theme.bg }}>
      <ul style={{ color:theme.syntax, background:theme.ui }}>
        <li>The way of kings</li>
        <li>The name of the wind</li>
        <li>The final empire</li>
      </ul>
    </div>
  );
}

export default BookList;