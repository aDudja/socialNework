import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setNews} from "../../redux/news-reducer";
import News from "./News";

class NewsContainer extends React.Component {

    componentDidMount() {

        let setNews = () => {
            let url = 'http://localhost:8010/proxy/method/wall.get?domain=e30clubru&count=100&filter=others&access_token=c781562aa3a5fb0558d4df4424d3439ed628ccdb7a4f0dca691a5cd74222e5ef1a4c16fa1a380e59105c4&v=5.120';
            axios.get(url)
                .then(response => {
                    if (this.props.news[0] == undefined || this.props.news[0].id!=response.data.response.items[0].id){
                        this.props.setNews(response.data.response.items);
                    } else {
                        console.log('Интервальное время прошло, новых постов нет');
                    }
                });
        };
        setNews();

        this.updateNewsInterval = setInterval(
            ()=>{
                setNews();
            }, 60000
        );
    }

    componentWillUnmount() {
        clearInterval(this.updateNewsInterval);
    }

    render() {
        return <News {...this.props} news={this.props.news} />
    }
}

let mapStateToProps = (state) => ({news: state.newsPage.news});

export default connect(mapStateToProps,{setNews})(NewsContainer);