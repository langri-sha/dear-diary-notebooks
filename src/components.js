import React from 'react'

import style from './styles/index.css'

const Content = () => (
  <article className={style.content} />
)

const Diary = () => (
  <aside className={style.diary} />
)

export const DearDiary = () => (
  <div className={style.container}>
    <Content />
    <Diary />
  </div>
)
