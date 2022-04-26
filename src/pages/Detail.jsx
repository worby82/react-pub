import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import '../css/detail.css'
import { app, btn, container, detail } from "../components/Bem";
import Icon from "../components/Icon";
import Title from "../components/Title";
import Text from "../components/Text";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailData } from "../store/reducers/dataSlice";

const Detail = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const status = useSelector(state => state.data.statusDetail)
    const data = useSelector(state => state.data.detailData)

    useEffect(() => {
        dispatch(fetchDetailData(params))
    }, [])

    return (
        <div className={app()}>
            {
                status !== 'fulfilled'
                    ? <Title lvl="2" cn={{ 'no-result': true }} value={status} />
                    : <main className={detail()}>
                        <div className={detail('image')}>
                            <Image detail={true} image={{ jpgPrev: data.jpgDetail, webpPrev: data.webpDetail, alt: data.name }} width={'auto'} height={'auto'} />
                        </div>
                        <div className={detail('content')}>
                            <div className={container()}>
                                <Title lvl='1' cn={{ cocktail: true }} value={data.name} />
                                <Text value={data.shortDescription} />
                                <Title lvl='2' cn={{ description: true }} value='Ингредиенты' />
                                {
                                    Object.entries(data.ingredients).map(([id, ingredients]) => {
                                        return <Text value={ingredients} exclusion key={id} name={id} />
                                    })
                                }
                                <Title lvl='2' cn={{ description: true }} value='Как готовить' />
                                {
                                    data.cook.map((textData, id) => {
                                        return <Text value={textData} key={id} />
                                    })
                                }
                            </div>
                        </div>
                    </main>
            }
            <Link className={btn({ back: true })} to="/react-pub/">
                <Icon cn={btn('icon')} icon='vector' />
            </Link>
        </div>
    );
}

export default Detail;