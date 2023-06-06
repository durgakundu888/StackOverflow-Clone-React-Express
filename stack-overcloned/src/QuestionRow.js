import styled from 'styled-components';

const QuestionLink = styled.a`
    text-decoration: none;
    color: #3ca4ff;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 5px;
`;
const QuestionStat = styled.div`
    text-align: center;
    display: inline-block;
    font-size: 1.2rem;
    color: #aaa;
    margin-top: 7px;
    span {
      font-size: 0.7rem;
      display: block;
      font-weight: 300;
      margin-top: 4px;
    }
`;
const QuestionTitleArea = styled.div`
  padding: 0 30px;
`;
const Tag = styled.span`
  display: inline-block;
  margin-right: 5px;
  background-color: #3e4a52;
  color: #9cc3db;
  padding: 7px;
  border-radius: 5px;
  font-size: .9rem;
`;
const StyledQuestionRow = styled.div`
    background-color: rgba(255,255,255,0.05);
    padding: 15px 15px 10px;
    display: grid;
    grid-template-columns: repeat(3, 50px) 1fr;
    border-top: 1px solid #555;
`;
const WhoAndWhen = styled.div`
    display: inline-block;
    color: #aaa;
    font-size: 0.8rem;
    float:right;
`;
const UserLink = styled.a`
    color: #3ca4ff;
`;
function QuestionRow() {
    return (
        <>
            <StyledQuestionRow></StyledQuestionRow>
            <QuestionStat>0<span>votes</span></QuestionStat>
            <QuestionStat>1<span>answers</span></QuestionStat>
            <QuestionStat>6<span>views</span></QuestionStat>
            <QuestionTitleArea>
                <QuestionLink>Getting string in quotes in javascript.</QuestionLink>
                <Tag>javascript</Tag>
                <Tag>parsing</Tag>
                <Tag>quotes</Tag>
                <Tag>literals</Tag>
                <WhoAndWhen>
                    asked 2 mins ago <UserLink>Durga</UserLink>
                </WhoAndWhen>
            </QuestionTitleArea>
        </>
    );
}

export default QuestionRow;