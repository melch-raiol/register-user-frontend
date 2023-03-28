import './styles.css';
import Imagens from '../../databases';

function Main() {

    return (
        <div className='div-image'>
            {Imagens.map((img) => (img.image))}
        </div>
    )
};

export default Main;