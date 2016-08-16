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
    </header>
    <ShopLink />
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
