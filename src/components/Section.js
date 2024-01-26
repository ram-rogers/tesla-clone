import React from 'react'
import { Fade } from 'react-reveal'
import styled from 'styled-components'

const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg }) => {

    return (
        <Wrap bgImg={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>

                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }

                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Fade>
            </Buttons>



        </Wrap>
    )

}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; //horizontal
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: ${(props) => `url("/images/${props.bgImg || 'modal-s.jpg'}")`};

`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
z-index: -1;

`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media(max - width: 768px) {
    flex-direction: column;
}

`

const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.9);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;


`

const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.8;
color: black;

`

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;

`

const Buttons = styled.div`

    `