import { Component } from 'react';
import styles from './Size.module.css';

class Size extends Component {
  render() {
    return (
      <div className={`${styles['sizeContainer']}`}>
        <p className={`${styles['sizeTitle']}`}>SIZE:</p>
        <div className={`${styles['sizeWrapper']}`}>
          <div className={`${styles['sizeItem']}`}>
            XS
          </div>
          <div className={`${styles['sizeItem']}`}>
            S
          </div>
          <div className={`${styles['sizeItem']}`}>
            M
          </div>
          <div className={`${styles['sizeItem']}`}>
            L
          </div>
        </div>
      </div>
    )
  }
}

export default Size;