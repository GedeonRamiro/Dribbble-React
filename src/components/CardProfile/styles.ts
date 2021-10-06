import styled from 'styled-components'

export const Container = styled.div`
  
    
`

export const InfoProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InfoUser =  styled.div`
    margin-left: 30px; 
    margin-right: 22px;
    width: 500px;
      
    img{  
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
    
    h2{
        font-size: 32px;
        font-weight: 800;
        line-height: 39px;
        margin: 30px 0;
        
    }
    
    h1{
        font-size: 48px;
        font-weight: 800;
        line-height: 58px;

    }

`

export const PhotoProfile = styled.div`
    img{
        width: 530px;
        height: 530px;
        object-fit: cover;
        border-radius: 4px;
    }
`

export const Posts = styled.div`

    display: flex;
    justify-content: center;

    img{
        width: 370px;
        height: 374px;
        object-fit: cover;
        border-radius: 4px;
        padding: 30px;
    }

`