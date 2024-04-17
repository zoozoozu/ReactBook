import styled from '@emotion/styled';

const Container = styled.span`
    margin: 0 16px;
    font-size: 1.2rem;
`;

interface CountProps {
    readonly value: number;
}


export const Count = ({value}: CountProps) => {
    return <Container>{value}</Container>;
}