import ContWrap from "../../components/ContWrap/ContWrap";
import { BiLink } from "react-icons/bi";

const Icons = () => {
    return(
        <ContWrap title='Icons'>
            <br />
            <h3>상업적으로 이용가능한 아이콘 사이트</h3>
            <p>자세한 사용법은 해당 사이트에서 제공하는 API 문서 참고</p>

            <br />
            <h4>css.gg <a href="https://css.gg/" target="_blank" style={{verticalAlign: 'sub', color: `var(--color-blue)` }}><BiLink size={20} /></a></h4>
            <h4>Feather <a href="https://feathericons.com/" target="_blank" style={{verticalAlign: 'sub', color: `var(--color-blue)` }}><BiLink size={20} /></a></h4>
            <h4>remixicon <a href="https://remixicon.com/" target="_blank" style={{verticalAlign: 'sub', color: `var(--color-blue)` }}><BiLink size={20} /></a></h4>
            <h4>fontello <a href="https://fontello.com/" target="_blank" style={{verticalAlign: 'sub', color: `var(--color-blue)` }}><BiLink size={20} /></a></h4>
            <h4>fontawesome <a href="https://fontawesome.com/" target="_blank" style={{verticalAlign: 'sub', color: `var(--color-blue)` }}><BiLink size={20} /></a></h4>
        </ContWrap>
    );
}

export default Icons