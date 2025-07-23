import React from 'react'
import {apple} from '../../assets/assets'
import {Dyson} from '../../assets/assets'
import {samsung} from '../../assets/assets'
import {Nintendo} from '../../assets/assets'
import {playstation} from '../../assets/assets'
import {LEGO} from '../../assets/assets'
import {pokemon} from '../../assets/assets'

const brands = [
  { name: 'Apple', img:apple },
  { name: 'Dyson', img: Dyson},
  { name: 'Samsung', img:samsung },
  { name: 'Nintendo', img: Nintendo},
  { name: 'PlayStation', img: playstation },
  { name: 'Lego', img: LEGO },
  { name: 'Pokémon', img: pokemon },
];

const BestSellingBrands = () =>{
  return (
    <>
    <section className='py-8 bg-white'>
        <div className='container mx-auto'>
            <h2 className='text-lg font-semibold mb-4 text-center'>Best-selling brands on Lexme E-commerce</h2>
            <div className='flex flex-wrap justify-center gap-6'>
                {brands.map((brand) =>(
                    <div key={brand.name} className='flex flex-col items-center'>
                        <div className='w-[80px] h-[80px] rounded-full bg-gray-100 flex items-center justify-center overflow-hidden'>
                            <img src={brand.img} alt={brand.name} />
                        </div>
                        <span>{brand.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default BestSellingBrands