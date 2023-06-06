import styled from 'styled-components';

const StyledHeader = styled.h1`
    font-size: 1.0rem;
`;

const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    padding: 30px 20px;
`;

const BlueButton = styled.button`
    background-color: #378ad3;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 12px 10px;
`;

const QuestionRow = styled.div`
    background-color: rgba(255,255,255,0.1);
    padding: 15px 15px;
    display: grid;
    grid-template-columns: repeat(3, 50px) 1fr;
    border-top: 1px solid #555;
`;

function QuestionsPage() {
    return (
        <main>
            <HeaderRow>
                <StyledHeader>Top Questions</StyledHeader>
                <BlueButton>Ask&nbsp;Question</BlueButton>
            </HeaderRow>
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
        </main>
    );
}
export default QuestionsPage;