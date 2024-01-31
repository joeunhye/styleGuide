import ContTab from "../../components/ContTab/ContTab";
import ContWrap from "../../components/ContWrap/ContWrap";

const Tab = () => {
    return(
        <ContWrap title="Tab">
            <p><code>new Tab('#탭ID명')</code> 호출</p>
            <ContTab />
        </ContWrap>
    );
}

export default Tab