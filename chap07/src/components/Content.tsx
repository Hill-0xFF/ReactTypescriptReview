/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';

import { T_ContentItem } from '@/types/content.type';

const Content = () => {
  const [items, setItems] = useState<T_ContentItem[]>([
    {
      id: 1,
      item: 'One half pound bag of Cocoa Covered Almonds Unsalted',
      checked: false,
    },
    {
      id: 2,
      item: 'Item 2',
      checked: false,
    },
    {
      id: 3,
      item: 'Item 3',
      checked: false,
    },
  ]);

  return (
    <div>
      <main>
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => console.log('Input: changed')}
              />
              <label>
                <FaCheckCircle>{item.item}</FaCheckCircle>
              </label>

              <button>
                <FaTrashAlt key={item.id} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Content;
