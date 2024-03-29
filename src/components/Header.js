import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice"
import { useSelector } from 'react-redux';

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const cars = useSelector(selectCars)



    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu)
    }




    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="Logo" />
            </a>
            <Menu>
                {
                    cars && cars.map((car, index) => (

                        <a key={index} href={`#${car}`}>{car}</a>
                    ))
                }


            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Login</a>
                <CustomMenu onClick={handleMenuToggle} />

            </RightMenu>


            <BurgerNav show={toggleMenu}>


                <ClassWrapper>
                    <CustomClose onClick={handleMenuToggle} />

                </ClassWrapper>
                {
                    cars && cars.map((car, index) => (

                        <li key={index}><a href={`#${car}`}>{car}</a></li>

                    ))
                }

                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadaster</a></li>

            </BurgerNav>


        </Container>
    )
}

export default Header

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;


`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px){
        display: none;
    }


`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;


`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display:flex;
    flex-direction: column;
    text-align: start;
    transition :transform 0.5s ease-in-out;
    
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition :transform 0.2s;
    
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);

        a{
            font-weight: 600;
        }
    }


`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;


`

const ClassWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`