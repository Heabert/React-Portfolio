import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const aboutMe = (props) => {
    return (
        <div>
            <Card inverse>
                <CardImg width="100%" src="" />
                <CardImgOverlay>
                    <CardTitle>About Me</CardTitle>
                    <CardText> Heabert aka Heabs
                        Name 	Heabert Cameron
                        Phone 	1800-dontcall
                        Email 	heabs911@gmail.com
                        Address The world
                    </CardText>
                    <CardText>
                        <small className="text-muted"></small>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default aboutMe;