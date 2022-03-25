import React from 'react';
import MyLi from './MyLi';

const Categories = () => {
    return (
        <div className="categories">
            <ul>
                <MyLi className="active" title="Все"></MyLi>
                <MyLi title="Мясные"></MyLi>
                <MyLi title="Вегетарианская"></MyLi>
                <MyLi title="Гриль"></MyLi>
                <MyLi title="Острые"></MyLi>
                <MyLi title="Закрытые"></MyLi>
            </ul>
        </div>
    );
};

export default Categories;
