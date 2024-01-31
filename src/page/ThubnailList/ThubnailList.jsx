import ContTab from "../../components/ContTab/ContTab";
import ContWrap from "../../components/ContWrap/ContWrap";

const ThubnailList = () => {
    return(
        <ContWrap title="Thubnail List">
            <p>
                갤러리형, 리스트형으로 보기 전환 시 <code>gridView()</code> 호출
            </p>
            <ContTab />
        </ContWrap>
    );
}

export default ThubnailList