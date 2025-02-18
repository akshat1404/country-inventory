import React, { useImperativeHandle } from 'react'
import { COUNTRIES } from '../Data'

const Index=React.forwardRef(({label,renderItem},ref)=>{

    const [selected, setSelected] = React.useState('');

    useImperativeHandle(ref,()=>({
        getCountry:()=>selectedCountry?.label,
        getAlpha2:()=>selectedCountry?.alpha2,
        getAlpha3:()=>selectedCountry?.alpha3,
        getNumeric:()=>selectedCountry?.numeric,
        getCurrency:()=>selectedCountry?.currency,
        getPhoneCode:()=>selectedCountry?.phoneCode,
    }))

    return (
        <>
            <div style={{marginBottom:"10px"}}>
                {label &&<label>{label}</label>}
            </div>
            <select
                value={selected}
                onChange={(val) => {
                    setSelected(val);
                }}
            >
                <option value="">{'Select a country'}</option>
                {COUNTRIES.map((item) => (
                <option key={item.alpha2} value={item} >
                    {renderItem ? renderItem(item) : item.country}
                </option>
                ))}
            </select>
        </>
    )
})

export default Index;