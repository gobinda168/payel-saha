import React, { useCallback, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from '../photos';

const WorkGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    // <section id="portfolio">
    //   <div style={{ margin: '30px 0' }}>
    //     <div className="twelve columns collapsed">
    //       <div
    //         id="portfolio-wrapper"
    //         className="bgrid-quarters s-bgrid-thirds cf"
    //       >
    <div className="img-gallery">
      <div className="work-title">
        <h1>Check Out Some of My Works.</h1>
      </div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default WorkGallery;
