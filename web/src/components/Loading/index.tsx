import { Spinner, SpinnerContainer } from './styled';

interface LoadingProps {
    fullPage?: boolean;
}

export function Loading( { fullPage }: LoadingProps){
    return(
        <SpinnerContainer fullPage={fullPage}>
            <Spinner>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Spinner>
        </SpinnerContainer>
    )
}