import ContTab from "../../components/ContTab/ContTab";
import ContWrap from "../../components/ContWrap/ContWrap";

const Popup = () => {
    return(
        <ContWrap title="Popup">
            <p>button 태그에 <code>onclick="popClose('#팝업ID명')</code> 호출</p>
            <ContTab />
        </ContWrap>
    );
}

export default Popup