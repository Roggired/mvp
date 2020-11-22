import * as React from "react";
import {RootView} from "../../components/RootView";
import {Body} from "../../components/Body";
import {Footer} from "../../components/Footer";
import Header from "../../components/Header";
import {Button} from "../../components/Button";
import {ModelImg} from "../personal/ModelImg";
import loadingImage from "../../assets/loading.jpg"
import {Adverts} from "../personal/Adverts";

export default class Enterprise extends React.Component {
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
                            <ModelImg src={loadingImage} alt="Тут должна быть картинка загрузки"/>
                        </div>
                        <Adverts>
                            <Button height="70px"
                                    width="200px">
                                Загрузить фото
                            </Button>
                            <Button height="70px"
                                    width="200px">
                                Скачать модель
                            </Button>
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