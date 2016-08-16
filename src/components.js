import React from 'react'

import logo from './images/logo.svg'
import style from './styles/index.css'

const ShopLink = () => (
  <a className={style.shopLink} href="https://www.etsy.com/shop/DearDiaryNotebooks">
    Visit my little shop
  </a>
)

const Content = () => (
  <article className={style.content}>
    <header>
      <h1>
        <img
          alt={'Dear Diary Notebooks'}
          src={logo}
        />
      </h1>
      <h2>
        Hardcover notebooks with with handmade patterns
      </h2>
    </header>
    <p>
      Hello! My name is Maja Zorić and I'm a painter. For all those dreamers who like botanical and floral design, something from nature, with love!
    </p>
    <ShopLink />
    <footer>
      Foo Bar Baz
    </footer>
  </article>
)

const Diary = () => (
  <aside className={style.diary} />
)

export const DearDiary = () => (
  <div>
    <Content />
    <Diary />
  </div>
)
