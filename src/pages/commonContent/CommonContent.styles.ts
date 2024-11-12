import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #262626;
`
export const InnerContainer = styled.div`
    flex: 1;
`

export const NavigationFooterBar = styled.div`
    padding: 6px;
    background-color: white;
    max-height: 70px;
    height: 100%;
    max-width: 250px;
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 32px;
    border-top-left-radius: 48px;
    border-bottom-left-radius: 48px;
    border-top-right-radius: 48px;
    border-bottom-right-radius: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 12px;
`

export const Option = styled.div<{isSelected: boolean}>`
    padding: 12px;
    border-radius: 64px;
    background-color: ${(props) => props.isSelected ? `#D9D9D9` : `white`};
`;

export const OptionImg = styled.img``;