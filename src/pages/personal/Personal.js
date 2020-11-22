import React from "react"
import {Body} from "../../components/Body";
import {ModelImg} from "./ModelImg";
import modelImage from "../../assets/3d_model.jpg";
import {Adverts} from "./Adverts";
import {AdvertImg} from "./AdvertImg";
import advertImg1 from "../../assets/advert1.png";
import advertImg2 from "../../assets/advert2.jpg";
import advertImg3 from "../../assets/advert3.jpg";
import {Footer} from "../../components/Footer";
import {RootView} from "../../components/RootView";
import Header from "../../components/Header";

export default class Personal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <RootView>
                    <Header/>
                    <Body>
                        <div>
                            <ModelImg src={modelImage} alt="Тут должна быть картинка 3D модели" />
                        </div>
                        <Adverts>
                            <AdvertImg src={advertImg1} alt="Тут должна быть реклама 1" />
                            <AdvertImg src={advertImg2} alt="Тут должна быть реклама 2" />
                            <AdvertImg src={advertImg3} alt="Тут должна быть реклама 3" />
                        </Adverts>
                    </Body>
                    <Footer>
                        XSphere MVP. Made by Aleksei &Yaroslav & Nadezhda
                    </Footer>
                </RootView>
            </>
        );
    }
}
