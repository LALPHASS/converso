'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import search from '@/public/icons/search.svg'
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils'

const SearchInput = () => {

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams()
  const query = searchParams.get('topic') || '';

 
  const [searchQuery, setsearchQuery] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() =>{
        if(searchQuery) {
      const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'topic',
          value: searchQuery,
        });
          router.push(newUrl, {scroll: false});
      } else{
        if( pathname === '/companions') {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ['topic'],
          });
          router.push(newUrl, {scroll: false});
        }
      }

    }, 1000 )
   

   
  
   
  }, [searchQuery, router, pathname,searchParams ])
  
  return (
    <div className='relative border border-black rounded-lg items-center flex gap-2 p-1 h-fit'>
      <Image src ={search} alt='search' width={15} height={15}/>
      
      
      <input
      placeholder='Search by companion'
      className='outline-none'
      value={searchQuery}
      onChange={(e) => setsearchQuery(e.target.value)}
      />
    </div>
  ) 
}

export default SearchInput