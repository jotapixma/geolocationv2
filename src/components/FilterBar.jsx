import React from 'react';
import '../assets/styles/components/FilterBar.scss';

const FilterBar = () => (
  <section className="filter-bar">
    <ul className="filter-content">
      <li className="filter-item active">Orden
        <span>1</span>
      </li>
      <li className="filter-item active">Filtros
        <span>8</span>
      </li>
      <li className="filter-item">Mapa</li>
    </ul>
  </section >
);

export default FilterBar;