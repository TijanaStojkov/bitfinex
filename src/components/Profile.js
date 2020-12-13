import React, { useState, useEffect } from 'react';

//materialize
import { Row, Icon, Col, Card, CardTitle, Button } from 'react-materialize';

const img1 = 'https://api.hello-avatar.com/adorables/285';
const img2 = 'https://api.hello-avatar.com/adorables/285/%3cYOUR_EMAIL';

const Profile = () => {
    const [img, setImg] = useState(img1)
    
    const toggleImage = () => {
        const currentImage = img;
        const newImage = currentImage===img1?img2:img1;
        setImg(newImage)
    }

    return (
        <div className='Profile'>
            <Row>
                <Col
                    l={4}
                    m={7}
                    s={12}
                >
                    <Card
                    actions={[
                        <Button key="1" onClick={toggleImage} style={{backgroundColor:'#F0DA5E', color:'#000', fontSize:'15px'}}>
                            Toggle avatar
                        </Button>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={img}></CardTitle>}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h5>Goran Urukalo</h5>
                        <p>goran.urukalo@teletrader.com</p>
                        <p>http://goran.urukalo.github.io</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )

}
export default Profile;