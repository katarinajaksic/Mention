import React from 'react';
import style from './mention.module.css';
import icon from './planet.jpg';
import bluedot from './bluedot.png'

const Mention = ({displayable_url, title, updated_at, image, description, read}) => {

    var dis_url = displayable_url.split("/")[0] ;
    var cutDate = updated_at.split("T")[0];
    var newDate = new Date(cutDate);
    var finalDate = new Intl. DateTimeFormat('en-GB', {day:'numeric', month: 'short'}).format(newDate);

    var isRead = 'initial';
    if (read === true){
        isRead = 'none';
    };

    var dateColor = "rgb(73, 72, 72)";
    if (read === false){
        dateColor = "rgb(54, 187, 231)";
    };

    return(
        <div className={style.component}>
            <div className={style.photo_flex}>
                <div className={style.photos}>
                    <img src={image} alt="" className={style.avatar}/>
                    <img src={icon} alt=""  className={style.icon}/>
                </div>
                <div className={style.dot_container}>
                    <img style={{display: isRead}} src={bluedot} alt=""  className={style.dot}/>
                </div>
            </div>
            <div className={style.text_flex}>
                <div className={style.first_row}>
                    <p className={style.url}>{dis_url}</p>
                    <p style={{color: dateColor}} className={style.date}>{finalDate}</p>
                </div>
                <div className={style.second_row}>
                    <h3 className={style.title}>{title}</h3>
                    <span className={style.description}>{description}</span>
                </div>
            </div>
        </div>
    )
}

export default Mention;