import styled from '@emotion/styled'

const Label = styled.h1`
    margin-bottom: 32px;
`;

interface TitleProps {
    title: string;
}

export const Title = ({title}:TitleProps) => {
    return <Label>{title}</Label>
}
