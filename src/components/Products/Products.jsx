import React, { useContext , useEffect } from 'react'

import { ApiContext } from '../../context/Apicontext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Products = () => {
    const {data} = useContext(ApiContext)
    const {getData} = useContext(ApiContext)
    useEffect(()=>{
        getData(`${process.env.REACT_APP_ABCD}/products`)
    },[])
    

  //styled components
  const Container = styled.div`
 
`
const Image = styled.img`
    max-width: 100%;
`
const Card = styled.div`
    
`

  return (
    <div>
          <h1>This is Products Page</h1>
        <Container>
            {data.map((e)=>   <Link to={`/${e.id}`} style={{textDecoration:"none",color:"black"}}>
                    <Card key={e.id}>
                    <h2>{e.name}</h2>
                    <h2>Product Details: {e.description}</h2>
                    </Card>
                    </Link>
            )}
        </Container>
    </div>
  )
}