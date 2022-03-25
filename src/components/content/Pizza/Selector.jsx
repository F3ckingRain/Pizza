import React from 'react';
import MyLi from '../../UI/MyLi';

const Selector = (props) => {

    return (
        <div className="pizza-block__selector">
            <ul>
                <MyLi 
                    className="active" 
                    title="тонкое">
                </MyLi>
                <MyLi title="традиционное"></MyLi>
            </ul>
            <ul>
                <MyLi
                    
                    className="active"
                    title={props.radius_1}
                >
                </MyLi>
                <MyLi  title={props.radius_2}></MyLi>
                <MyLi  title={props.radius_3}></MyLi>
            </ul>
        </div>
    );
};

export default Selector;
