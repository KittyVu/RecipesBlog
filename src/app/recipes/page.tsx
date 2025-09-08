import CateBread from '@/components/CateBread'
import CateCake from '@/components/CateCake'
import CateOthers from '@/components/CateOthers'
import Search from '@/components/Search'
import React from 'react'

export default function Recipes() {
  return (
    <div>
      <Search />
      <CateCake />
      <CateBread />
      <CateOthers />
    </div>
  )
}
