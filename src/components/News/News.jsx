import React from 'react';
import s from './News.module.css';

let News = (props)=>{
    return <><div className={s.header}>Новости BMW e30 клуба</div>
        <div>{props.news.map((n, index) => {
            return <div key={n.id + '-' + index}>
                <div><a target='_blank' href={'https://vk.com/wall' + n.owner_id + '_' + n.id}>Пост {n.id}</a> {n.text}
                </div>
                <div>{n.attachments == null ? null : n.attachments.map((p, index) => {
                    return p.type === 'photo' ?
                        <a key={p.type + '-' + index}
                           target='_blank'
                           href={p[p.type].sizes[6].url}>
                            <img className={s.photo} src={p[p.type].sizes[2].url}/>
                        </a> : <a key={p.type + '-' + index}
                                  target='_blank'
                                  href={'https://vk.com/' + p.type + p[p.type].owner_id + '_' + p[p.type].id}>
                            {p.type}
                        </a>
                })}
                </div>
                <hr/>
            </div>
        })}</div>
    </>
}

export default News;