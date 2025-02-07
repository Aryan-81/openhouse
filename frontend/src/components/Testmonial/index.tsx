import React, { useState } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from './Testmonial.module.css'

interface Testimonial {
    photo: string;
    name: string;
    position: string;
    from: string;
    content: string;
}

const testimonialList: Testimonial[] = [
    {
        photo:
            "/direc.png",
        name: "Dr. Manoj Singh Gaur",
        position: "Founding Director of IIT Jammu",
        from: "India",
        content:
            '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
    {
        photo:
            "/direc.png",
        name: "Dr. Manoj Singh Gaur",
        position: "Founding Director of IIT Jammu",
        from: "India",
        content:
            '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
];

const Testimonial19: React.FC = () => {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);

    const handleControl = (type: "prev" | "next") => {
        if (type === "prev") {
            setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
        } else {
            setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
        }
    };

    return (
        <section className="ezy__testimonial19 light">
            <Container className={styles.ctr}>
                <h1 style={{position:'absolute',left:'10%'}}>Message</h1>
                <Row className="justify-content-center align-items-center position-relative">
                    <Col md={6} className="position-relative">
                        <div className="ezy__testimonial19-card">
                            <Carousel
                                activeIndex={index}
                                onSelect={handleSelect}
                                controls={false}
                                indicators={false}
                            >
                                {testimonialList.map(({ name, content, position, from }, i) => (
                                    <Carousel.Item key={i}>
                                        <div>
                                            <p className="mb-4">{content}</p>
                                            <h5 className="ezy__testimonial19-author">
                                                - {name}, {position}, {from}
                                            </h5>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                    <Col md={4} className="text-center text-md-start mt-5 mt-md-0">
                        <Carousel
                            activeIndex={index}
                            onSelect={handleSelect}
                            controls={false}
                            indicators={false}
                        >
                            {testimonialList.map(({ photo, name }, i) => (
                                <Carousel.Item key={i}>
                                    <img src={photo} alt={name} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>

                    <Button
                        variant=""
                        className="carousel-control-prev"
                        onClick={() => handleControl("prev")}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Button>
                    <Button
                        variant=""
                        className="carousel-control-next"
                        onClick={() => handleControl("next")}
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial19;
