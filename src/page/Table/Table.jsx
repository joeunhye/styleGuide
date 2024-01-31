import ContTab from "../../components/ContTab/ContTab";
import ContWrap from "../../components/ContWrap/ContWrap";

const Table = () => {
    return(
        <ContWrap title="Table">
            <p>테이블 상단 건수 및 정렬 기능은 <code>sortList();</code> 호출 필요</p>
            <ContTab />
        </ContWrap>
    );
}

export default Table