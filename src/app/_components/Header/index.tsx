{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { fetchHeader } from '../../_api/fetchGlobals'
import { Header } from './../../../payload/payload-types';
import HeaderComponent from './HeaderComponent/index'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
