import React from 'react';
import ModalPersonnage from './ModalPersonnage';
import useModal from '../../../hooks/useModal';

const VignettePersonnage = ({ name, description, backgroundColorModal }) => {
    const { isShowing, toggle } = useModal();

    return (
        <>
            <img
                src={require(`../../../assets/img/Personnages/vignettes/${name}.png`).default}
                alt={name}
                className='img-fluid'
                style={{ cursor: "pointer" }}
                onClick={toggle} />

            <ModalPersonnage
                isShowing={isShowing}
                hide={toggle}
                name={name}
                description={description}
                backgroundColorModal={backgroundColorModal}
                />
        </>
    )
}

export default VignettePersonnage;
