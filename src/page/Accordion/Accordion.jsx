import ContTab from "../../components/ContTab/ContTab";
import ContWrap from "../../components/ContWrap/ContWrap";

const Accordion = () => {
    return(
        <ContWrap title="Accordion">
            <p>
                기본 아코디언은 <code>accordionBasic()</code> 호출
            </p>
            <p>
                하나씩만 펼쳐지는 아코디언은 <code>accordionSeveral()</code> 호출
            </p>
            <p>
                슬라이드다운 아코디언은 <code>accordionSlide()</code> 호출
            </p>
            <ContTab />
        </ContWrap>
    );
}

export default Accordion